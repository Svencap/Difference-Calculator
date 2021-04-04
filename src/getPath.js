import path, { dirname } from 'path';

import yaml from 'js-yaml';

import { fileURLToPath } from 'url';

import * as fs from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const getPath = (file) => path.resolve(dirName, '..', '__fixtures__', file);

const parser = (file) => {
  const extname = path.extname(file);
  switch (extname) {
    case '.json':
      return JSON.parse(fs.readFileSync(getPath(file)));
    case '.yml':
      return yaml.load(fs.readFileSync(getPath(file), 'utf-8'));
    default:
      return null;
  }
};

export { getPath, parser };
