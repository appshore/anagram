import Readlines from 'n-readlines';

/**
 * sort a line in alphabetic order
 * @param {*} line
 */
const sortLine = line =>
  line
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

/**
 * build the unique anagramn key
 * @param {*} line
 */
const anaKey = line => `_${line.length < 2 ? line : sortLine(line)}`;


let lin;
const liner = new Readlines('./data/wordlist.txt');

const ana = []; // array of all anagrams

// file is read only once
// to generate a unique key per anagram
// then use the key to store all the potential values for an anagram
while ((lin = liner.next())) {
  const line = lin.toString('ascii');
  const sorted = anaKey(line);
  if (ana[sorted]) {
    ana[sorted].push(line);
  } else {
    ana[sorted] = [];
    ana[sorted].push(line);
  }
}

/**
 * Process the word(s) to get some Anagrams
 * or return an empty array if the word is unknown
 * @param {*} words
 */
const getAnagrams = ({ words }) => {
  const arrWords = words.split(',');
  return arrWords.reduce((acc, word) => {
    const anagram = ana[anaKey(word)];
    return anagram
      ? Object.assign({}, acc, { [word]: anagram.filter(w => w !== word) })
      : { [word]: [] };
  }, {});
};

export { anaKey, getAnagrams, sortLine };
