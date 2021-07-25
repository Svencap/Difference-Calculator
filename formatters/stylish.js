/* eslint object-curly-newline: ["error", "never"] */
const stylish = (tree) => {
  const space = ' ';
  const iter = (node, depth) => {
    const result = [];
    if (depth === 2) result.push('{');
    node.forEach((item) => {
      const { name, value, oldValue, newValue, status, children } = item;
      if (status === 'unchanged') result.push(`${space.repeat(depth)}  ${name}: ${value}`);
      else if (status === 'added') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}+ ${name}: {\n${iter(children, depth + 4)}\n${space.repeat(depth)}  }`);
        } else result.push(`${space.repeat(depth)}+ ${name}: ${value}`);
      } else if (status === 'deleted') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}- ${name}: {\n${iter(children, depth + 4)}\n${space.repeat(depth)}  }`);
        } else result.push(`${space.repeat(depth)}- ${name}: ${value}`);
      } else if (status === 'changed') {
        if (children !== undefined) {
          result.push(`${space.repeat(depth)}- ${name}: {\n${iter(children, depth + 4)}\n${space.repeat(depth)}  }\n${space.repeat(depth)}+ ${name}: ${newValue}`);
        } else result.push(`${space.repeat(depth)}- ${name}: ${oldValue}\n${space.repeat(depth)}+ ${name}: ${newValue}`);
      } else if (children !== undefined) result.push(` ${space.repeat(depth)} ${name}: {\n${iter(children, depth + 4)}\n${space.repeat(depth)}  }`);
    });
    if (depth === 2) result.push('}');
    return result.join('\n');
  };
  return iter(tree, 2);
};
export default stylish;
