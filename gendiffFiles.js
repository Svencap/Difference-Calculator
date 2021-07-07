import _ from 'lodash';

/* eslint object-curly-newline: ["error", "never"] */
const diff = (file1, file2) => {
  const buildAst = [];
  const uniqKeys = _.sortBy(_.uniq([..._.keys(file1), ..._.keys(file2)]));
  uniqKeys.forEach((key) => {
    if (typeof file1[key] === 'object' && typeof file2[key] === 'object') {
      buildAst.push({ name: key, children: diff(file1[key], file2[key]) });
    } else if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        buildAst.push({ name: key, value: file1[key], status: 'unchanged' });
      } else if (typeof file1[key] === 'object') {
        buildAst.push({ name: key, children: diff(file1[key], file1[key]), newValue: file2[key], status: 'changed' });
      } else {
        buildAst.push({ name: key, oldValue: file1[key], newValue: file2[key], status: 'changed' });
      }
    } else if (!_.has(file1, key) && _.has(file2, key)) {
      if (typeof file2[key] === 'object') {
        buildAst.push({ name: key, children: diff(file2[key], file2[key]), status: 'added' });
      } else buildAst.push({ name: key, value: file2[key], status: 'added' });
    } else if (_.has(file1, key) && !_.has(file2, key)) {
      if (typeof file1[key] === 'object') {
        buildAst.push({ name: key, children: diff(file1[key], file1[key]), status: 'deleted' });
      } else buildAst.push({ name: key, value: file1[key], status: 'deleted' });
    }
  });
  return buildAst;
};

const formater = (tree) => {
  const space = ' ';
  // let countBracket = 0;
  const iter = (node, depth) => {
    const result = [];
    if (depth === 2) {
      result.push('{');
    }
    node.forEach((item) => {
      const { name, value, oldValue, newValue, status, children } = item;
      if (status === 'unchanged') {
        result.push(`${space.repeat(depth)}  ${name}: ${value}`);
      } else if (status === 'added') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}+ ${name}: {\n${iter(children, depth + 4)} \n${space.repeat(depth)}  }`);
        } else result.push(`${space.repeat(depth)}+ ${name}: ${value}`);
      } else if (status === 'deleted') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}- ${name}: {\n${iter(children, depth + 4)} \n${space.repeat(depth)}  }`);
        } else result.push(`${space.repeat(depth)}- ${name}: ${value}`);
      } else if (status === 'changed') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}- ${name}: {\n${iter(children, depth + 4)}\n${space.repeat(depth)}  } \n${space.repeat(depth)}+ ${name}: ${newValue}`);
        } else result.push(`${space.repeat(depth)}- ${name}: ${oldValue}\n${space.repeat(depth)}+ ${name}: ${newValue}`);
      } else if (children !== undefined) {
        result.push(` ${space.repeat(depth)} ${name}: {\n${iter(children, depth + 4)} \n${space.repeat(depth)}  }`);
      }
    });
    if (depth === 2) {
      result.push('}');
    }
    return result.join('\n');
  };
  return iter(tree, 2);
};

export default { diff, formater };
