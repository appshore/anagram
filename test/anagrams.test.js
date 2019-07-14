/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';

import getAnagrams from '../src/anagrams';
import setStore from '../src/store';

const anaStore = setStore();

describe('getAnagrams ', () => {
  test('A word of less than 2 characters', () => {
    expect(getAnagrams({ anaStore, words: 'A' })).toEqual({
      A: []
    });
  });
  test('One word of 2 characters or more in list', () => {
    expect(getAnagrams({ anaStore, words: "real's" })).toEqual({
      "real's": ["earl's", "rale's"]
    });
    expect(getAnagrams({ anaStore, words: "earl's" })).toEqual({
      "earl's": ["rale's", "real's"]
    });
    expect(getAnagrams({ anaStore, words: "rale's" })).toEqual({
      "rale's": ["earl's", "real's"]
    });
  });
  test('Multiple words of 2 characters or more in list', () => {
    expect(getAnagrams({ anaStore, words: "real's,crepitus" })).toEqual({
      "real's": ["earl's", "rale's"],
      crepitus: ['cuprites', 'pictures', 'piecrust']
    });
    expect(getAnagrams({ anaStore, words: "real's,crepitus,tap" })).toEqual({
      "real's": ["earl's", "rale's"],
      crepitus: ['cuprites', 'pictures', 'piecrust'],
      tap: ['apt', 'pat']
    });
    expect(
      getAnagrams({
        anaStore,
        words: 'crepitus,paste,kinship,enlist,boaster,fresher,sinks,knits,sort'
      })
    ).toEqual({
      crepitus: ['cuprites', 'pictures', 'piecrust'],
      paste: ['pates', 'peats', 'septa', 'spate', 'tapes', 'tepas'],
      kinship: ['pinkish'],
      enlist: ['elints', 'inlets', 'listen', 'silent', 'tinsel'],
      boaster: ['boaters', 'borates', 'rebatos', 'sorbate'],
      fresher: ['refresh'],
      sinks: ['skins'],
      knits: ['skint', 'stink', 'tinks'],
      sort: ['orts', 'rots', 'stor', 'tors']
    });
  });
  test('One word of 2 characters not in list', () => {
    expect(getAnagrams({ anaStore, words: 'sdfwehrtgegfg' })).toEqual({
      sdfwehrtgegfg: []
    });
  });
  test('Multiple words of 2 characters not in list', () => {
    expect(getAnagrams({ anaStore, words: 'sdfwehrtgegfg,NotInTheList' })).toEqual({
      sdfwehrtgegfg: [],
      NotInTheList: []
    });
  });
  test('Multiple words in and not in list', () => {
    expect(getAnagrams({ anaStore, words: 'crepitus,sdfwehrtgegfg' })).toEqual({
      crepitus: ['cuprites', 'pictures', 'piecrust'],
      sdfwehrtgegfg: []
    });
    expect(getAnagrams({ anaStore, words: 'sdfwehrtgegfg,crepitus' })).toEqual({
      sdfwehrtgegfg: [],
      crepitus: ['cuprites', 'pictures', 'piecrust']
    });
  });
});
