/* eslint-disable import/extensions */
import { plain, constructorName } from './plain.js';

import stylish from './stylish.js';

const formaterName = (option, treeAst) => {
  if (option.format === 'plain') {
    return plain(treeAst, constructorName(treeAst));
  }
  return stylish(treeAst);
};
export default formaterName;
