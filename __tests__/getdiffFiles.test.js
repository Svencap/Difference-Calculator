import { test, expect } from '@jest/globals';

import { getPath, parser } from '../src/getPath';

// import getData from '../src/getData';

import { diff, formater } from '../gendiffFiles';

const expectDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('gendiffJson', () => {
  const beforePathJson = getPath('file1.json');
  const afterPathJson = getPath('file2.json');
  const tree = diff(parser(beforePathJson), parser(afterPathJson));
  expect(formater(tree)).toBe(expectDiff);
});

test('gendiffYml', () => {
  // const beforeYaml = getPath('file1.yml');
  // const afterPathYaml = getPath('file2.yml');
  // expect(getdiff(parser(beforeYaml), parser(afterPathYaml))).toEqual(expectDiff);
});
