/* eslint-disable import/extensions */
import { plain, constructorName } from './plain.js';

import stylish from './stylish.js';

import jsonFormatter from './json.js';

const formaterName = (option, treeAst) => {
  switch (option.format) {
    case 'plain':
      return plain(treeAst, constructorName(treeAst));
    case 'json':
      return jsonFormatter(treeAst);
    default:
      return stylish(treeAst);
  }
};
export default formaterName;
