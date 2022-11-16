/* eslint-disable import/extensions */
import createdTree from './treeAst.js';

import formaterName from '../formatters/index.js';

import { getPath, parser } from './getPath.js';

const genDiff = (filepath1, filepath2, format) => {
  const readFileSync1 = parser(getPath(filepath1));
  const readFileSync2 = parser(getPath(filepath2));
  const treeAst = createdTree(readFileSync1, readFileSync2);
  return formaterName(format, treeAst);
};
export default genDiff;
