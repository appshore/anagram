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

export { anaKey, sortLine };
