import { test, expect, describe } from '@jest/globals';
// import { description } from 'commander';

import { getPath, parser } from '../src/getPath';

// import getData from '../src/getData';

import { diff, formater } from '../gendiffFiles';
// import { parse } from 'commander';

describe('nesting check', () => {
  let tree;
  const expectDiff = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;
  test('json', () => {
    tree = diff(parser(getPath('file3.json')), parser(getPath('file4.json')));
    expect(formater(tree)).toBe(expectDiff);
  });
  test('yml', () => {
    tree = diff(parser(getPath('file3.yml')), parser(getPath('file4.yml')));
    expect(formater(tree)).toBe(expectDiff);
  });
});
