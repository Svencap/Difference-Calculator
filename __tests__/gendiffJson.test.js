import getPath from '../src/getPath';

import getData from '../src/getData';

import getdiff from '../gendiffJson';

const pathBefore = getPath('file1.json');
const pathAfter = getPath('file2.json');
const dataBeforeFile = JSON.parse(getData(pathBefore));
const dataAfterFile = JSON.parse(getData(pathAfter));

test('gendiffJson', () => {
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
