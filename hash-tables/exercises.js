/**
 * Implement the function remove braces which removes all 
 * curly brackets, square brackets and parenthesis from a string
 * @param {string} str A string to remove braces from
 * @returns {string} A string without braces
 */
const removeBraces = (str) => {

}

console.log(removeBraces('d(on)k}[ey]')) // => "donkey"
console.log(removeBraces('((((((ʕ•ᴥ•ʔ}}}}}')) // => "ʕ•ᴥ•ʔ"
console.log(removeBraces('([{}])')) // => ""


/**
 * Determine the time and space complexity of this algorithm 
 * and optimize it using an Object
 */
const hasDups = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};

// Big O Complexities
// Time: ???
// Space: ???
console.log(hasDups([1, 2, 2, 2, 4, 2, 3, 1])) // true
console.log(hasDups([1, 2, 3, 3, 4])) // => true
console.log(hasDups([66, 66, 66, 66, 66, 66])) // => true
console.log(hasDups([100, 99, 1, 10])) // => false
console.log(hasDups([100, 99, 1, 10, 10])) // => true

