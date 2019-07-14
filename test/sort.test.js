/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';

import { anaKey, sortLine } from '../src/sort';

describe('anaKey generation', () => {
  test('a word of less than 2 characters', () => {
    expect(anaKey('A')).toEqual('_A');
  });
  test('Two alpha characters or more', () => {
    expect(anaKey('AB')).toEqual('_AB');
    expect(anaKey('BA')).toEqual('_AB');
    expect(anaKey('CBA')).toEqual('_ABC');
    expect(anaKey('BAC')).toEqual('_ABC');
    expect(anaKey('CAB')).toEqual('_ABC');
  });
  test('Two alphanumeric characters or more', () => {
    expect(anaKey('Ab')).toEqual('_Ab');
    expect(anaKey('aBc')).toEqual('_aBc');
    expect(anaKey('1Bc')).toEqual('_1Bc');
    expect(anaKey('cb2')).toEqual('_2bc');
  });
  test('Two non alpha characters or more', () => {
    expect(anaKey("A'ab")).toEqual("_'aAb");
    expect(anaKey("ab'A")).toEqual("_'aAb");
    expect(anaKey("Aab'")).toEqual("_'aAb");
    expect(anaKey("baA'")).toEqual("_'aAb");
  });
  test('Words from list', () => {
    expect(anaKey("apc's")).toEqual("_'acps");
    expect(anaKey("cap's")).toEqual("_'acps");
    expect(anaKey("cape's")).toEqual("_'aceps");
    expect(anaKey("pace's")).toEqual("_'aceps");
    expect(anaKey("real's")).toEqual("_'aelrs");
    expect(anaKey("earl's")).toEqual("_'aelrs");
    expect(anaKey("rale's")).toEqual("_'aelrs");
  });
});

describe('sortLine', () => {
  test('a word of less than 2 characters', () => {
    expect(sortLine('A')).toEqual('A');
  });
  test('Two alpha characters or more', () => {
    expect(sortLine('AB')).toEqual('AB');
    expect(sortLine('BA')).toEqual('AB');
    expect(sortLine('CBA')).toEqual('ABC');
    expect(sortLine('BAC')).toEqual('ABC');
    expect(sortLine('CAB')).toEqual('ABC');
  });
  test('Two alphanumeric characters or more', () => {
    expect(sortLine('Ab')).toEqual('Ab');
    expect(sortLine('aBc')).toEqual('aBc');
    expect(sortLine('1Bc')).toEqual('1Bc');
    expect(sortLine('cb2')).toEqual('2bc');
  });
  test('Two non alpha characters or more', () => {
    expect(sortLine("A'ab")).toEqual("'aAb");
    expect(sortLine("ab'A")).toEqual("'aAb");
    expect(sortLine("Aab'")).toEqual("'aAb");
    expect(sortLine("baA'")).toEqual("'aAb");
  });
  test('Words from list', () => {
    expect(sortLine("apc's")).toEqual("'acps");
    expect(sortLine("cap's")).toEqual("'acps");
    expect(sortLine("cape's")).toEqual("'aceps");
    expect(sortLine("pace's")).toEqual("'aceps");
    expect(sortLine("real's")).toEqual("'aelrs");
    expect(sortLine("earl's")).toEqual("'aelrs");
    expect(sortLine("rale's")).toEqual("'aelrs");
  });
});
