// Question 1
/**
 * Finish the addNumber function
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns sum of a, b
 */

function addNumber(a, b) {
  return a + b
}
console.log(addNumber(5, 6))

// Question 2
/**
 * Finish the subtractNumber function
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns difference of a, b
 */

function subtractNumber(a, b) {
  return a - b
}
console.log(subtractNumber(8, 2))
// Question 3
/**
 * Finish the multiplyNumber function
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns product of a, b
 */

function multiplyNumber(a, b) {
  return a * b
}
console.log(multiplyNumber(4, 2))
// Question 4
/**
 * Finish the divideNumber function
 * @param {Number} a - first number
 * @param {Number} b - second number
 * @returns dividend of a, b
 */

function divideNumber(a, b) {
 return a / b
}
console.log(divideNumber(8, 3))
/**
 * Finish the greaterNumber function
 * @param {Number} a - first number
 * @param {Number} b - second number
 * @returns a or b
 */

function greaterNumber(a, b) {
 if (a > b)
 return a
 if (b > a)
 return b
}
console.log(greaterNumber(10, 4))

module.exports = {
  addNumber,
  subtractNumber,
  multiplyNumber,
  divideNumber,
  greaterNumber,
};
