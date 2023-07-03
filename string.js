/**
 * Finish the combineString function
 * @param {String} a - first string
 * @param {String} b - second string
 * @returns "ab" combine the two string values into one string
 */

function combineString(a, b) {
  return a + b;
}
console.log(combineString("ham", "sandwich"));
/**
 * Finish the charAt function
 * @param {String} a - first string
 * @param {Number} b - place at string
 * @returns "apple, 1 -> a returns the character"
 */

function charAt(a, b) {
  return a[b];
}
console.log(charAt("France", 3));
/**
 * Finish the findChar function
 * @param {String} a - first string
 * @param {String} b - character to find
 * @returns "apple, p -> 1  returns the index position of the first occurance of character"
 */

function findChar(a, b) {
  for (let x = 0; x < a.length; x++) {
    if (a[x] === b) return x;
  }
}
console.log(findChar("dictionary", "i"));

module.exports = {
  combineString,
  charAt,
  findChar,
};
