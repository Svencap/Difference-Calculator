/* eslint-disable object-curly-newline */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const constructorName = (tree) => {
  const iter = (node, ancestry) => {
    const result = [];
    for (const item of node) {
      const { name, children } = item;
      const newAncestry = `${ancestry}${name}`;
      result.push(newAncestry);
      if (children !== undefined) {
        result.push(iter(children, `${newAncestry}.`));
      }
    }
    return result.flat();
  };
  return iter(tree, '');
};

const findName = (listNames, name) => {
  for (const item of listNames) {
    const splitName = item.split('.');
    if (splitName.includes(name)) {
      return item;
    }
  }
  return name;
};

const plain = (tree, listNames) => {
  const result = [];
  tree.forEach((node) => {
    const { name, status, children, value, oldValue, newValue } = node;
    const checkTypeValue = typeof value === 'string' ? `'${value}'` : value;
    const checkTypeOldValue = typeof oldValue === 'string' ? `'${oldValue}'` : oldValue;
    const checkTypeNewValue = typeof newValue === 'string' ? `'${newValue}'` : newValue;
    const needName = findName(listNames, name);
    if (status === 'added') {
      if (value === undefined) {
        result.push(`Property '${needName}' was added with value: [complex value]`);
      } else result.push(`Property '${needName}' was added with value: ${checkTypeValue}`);
    } else if (status === 'deleted') {
      result.push(`Property '${needName}' was removed`);
    } else if (status === 'changed') {
      if (oldValue === undefined) {
        result.push(`Property '${needName}' was updated. From [complex value] to ${checkTypeNewValue}`);
      } else result.push(`Property '${needName}' was updated. From ${checkTypeOldValue} to ${checkTypeNewValue}`);
    } else if (children !== undefined) {
      result.push(plain(children, listNames));
    }
  });
  return result.join('\n');
};

export { plain, constructorName };
