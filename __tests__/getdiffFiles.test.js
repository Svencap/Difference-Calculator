import { test, expect, describe } from '@jest/globals';

import { getPath, parser } from '../src/getPath';

// import { plain, constructorName } from './plain.js';

import stylish from '../formatters/stylish';

import diff from '../gendiffFiles';
import { constructorName, plain } from '../formatters/plain';

let tree;

describe('nesting check', () => {
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
    expect(stylish(tree)).toBe(expectDiff);
  });
});

describe('plain json', () => {
  const expectPlainFormat = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;
  test('plain', () => {
    tree = diff(parser(getPath('file3.json')), parser(getPath('file4.json')));
    expect(plain(tree, constructorName(tree))).toBe(expectPlainFormat);
  });
});
