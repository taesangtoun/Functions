/**
 * Finsh the printAll function
 * @param {Array} a - array of Numbers
 * @returns null, "logs the elements in the array"
 */

function printAll(a) {
  for (var x = 0; x < a.length; x++) {
    console.log(a[x]);
  }
}
var collection = [1, 2, 3];
printAll(collection);

/**
 *
 * @param {Array} a - array of Numbers
 * @param {Number} b - number to find in array
 * @returns "[1,2,3], 2 -> 1 the index of the array"
 */

function findInArray(a, b) {
  for (var x = 0; x < a.length; x++) {
    if (a[x] === b) return x;
  }
}
var shelf = ["LODR", "Bible", "Flat Stanley", "Quran"];
console.log(findInArray(shelf, "Quran"));
/**
 *
 * @param {Array} a - array of Numbers
 * @param {Number} b - amount to add to each number
 * @returns "[1,2,3], 2 -> [3,4,5]"
 */

function addToArray(a, b) {
  for (var x = 0; x < a.length; x++) {
    a[x] = a[x] + b;
  }
  return a;
}
var cabinet = [2, 4, 5, 2, 1, 6];
console.log(addToArray(cabinet, 7));
/**
 *
 * @param {Array} a - array of Numbers
 * @param {Function} b - a function
 * @returns "[1,2,3], function that subtracts 2 -> [-1,0,1]"
 */

function doToArray(a, b) {
  for (var x = 0; x < a.length; x++) {
    a[x] = b(a[x]);
  }
  return a;
}
var vacuum = [1, 2, 3, 4, 5, 6, 7];

function square(number) {
  return number ** 2;
}
console.log(doToArray(vacuum, square));

/**
 *
 * @param {Array} a - array of Numbers
 * @param {Number} b - 1 for asc, -1 for desc
 * @returns "[2,1,3], 1 -> [1,2,3]"
 */

function sortArray(a, b) {
  for (var x = 0; x < a.length; x++) {}
}
var line = (4, 3, 6, 1, 7, 2);
module.exports = {
  printAll,
  findInArray,
  addToArray,
  doToArray,
  sortArray,
};
