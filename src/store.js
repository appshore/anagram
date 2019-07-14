import Readlines from 'n-readlines';

import { anaKey } from './sort';

/**
 * set the store containing anagrams
 */
const setStore = () => {
  const liner = new Readlines('./data/wordlist.txt');
  let lin;

  const ana = []; // array of all anagrams

  // file is read only once
  // to generate a unique key per anagram
  // then use the key to store all the potential values for an anagram
  while ((lin = liner.next())) {
    const line = lin.toString('ascii');
    const sorted = anaKey(line);
    if (!ana[sorted]) {
      ana[sorted] = [];
    }
    ana[sorted].push(line);
  }
  return ana;
};

export default setStore;
