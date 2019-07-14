import { anaKey } from './sort';

/**
 * Process the word(s) to get some Anagrams
 * or return an empty array if the word is unknown
 * @param {*} anaStore
 * @param {*} words
 */
const getAnagrams = ({ anaStore, words }) => {
  const arrWords = words.split(',');
  return arrWords.reduce((acc, word) => {
    const anagram = anaStore[anaKey(word)];
    return Object.assign(
      {},
      acc,
      anagram ? { [word]: anagram.filter(w => w !== word) } : { [word]: [] }
    );
  }, {});
};

export default getAnagrams;
