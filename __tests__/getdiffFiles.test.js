import { test, expect } from '@jest/globals';

import { getPath, parser } from '../src/getPath';

// import getData from '../src/getData';

import getdiff from '../gendiffFiles';

test('gendiffJson', () => {
  const pathBefore = getPath('file1.json');
  const pathAfter = getPath('file2.json');
  const dataBeforeFile = parser(pathBefore);
  const dataAfterFile = parser(pathAfter);
  const expectDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(getdiff(dataBeforeFile, dataAfterFile)).toBe(expectDiff);
});

test('gendiffYml', () => {
  const pathBefore = getPath('file1.yml');
  const pathAfter = getPath('file2.yml');
  const expectDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(getdiff(parser(pathBefore), parser(pathAfter))).toEqual(expectDiff);
});
