const removeBraces2 = (str) => {
  const braces = {
    "(": true, ")": true,
    "[": true, "]": true,
    "{": true, "}": true
  }
  let result = ""
  for (let char of str) {
    if (!(char in braces)) {
      result += char
    }
  }
  return result
}

console.log(removeBraces2('d(on)k}[ey]')) // => "donkey"
console.log(removeBraces2('((((((ʕ•ᴥ•ʔ}}}}}')) // => "ʕ•ᴥ•ʔ"
console.log(removeBraces2('([{}])')) // => ""

const anonymous = (arr) => {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!output.includes(num)) {
      output.push(num)
    }
  }
  return output;
}

// anonymous Big O
// Time: O (n^2). Nested loop.
// Space: O (x), where `x` is the number of unique elements. Best case only 1 element. Worst case `n` elements
console.log(anonymous([1, 2, 2, 2, 4, 2, 3, 1])) // => ???
console.log(anonymous([1, 2, 3, 3, 4])) // => ???
console.log(anonymous([66, 66, 66, 66, 66, 66])) // => ??? // Space complexity BEST case. 
console.log(anonymous([100, 99, 1, 10])) // => ??? // Space complexity WORST case

const anonymous2 = (arr) => {
  arr.sort((a, b) => a - b)
  let output = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      output.push(arr[i])
    }
  }
  return output
}

// anonymous2 Big O
// Time: O (n log n). Sorting O (n log n) is the greatest piece of work here, for loop is only O(n). We pick the BIGgest (BIG O).
// Space: O (x), where x is the number of unique elements
// One side effect: Sort modifies/rearranges the original array.

// console.log(anonymous2([1, 2, 2, 2, 4, 2, 3, 1])) // => ???
// console.log(anonymous2([1, 2, 3, 3, 4])) // => ???
// console.log(anonymous([66, 66, 66, 66, 66, 66])) // => ??? // Space complexity BEST case. 
// console.log(anonymous2([100, 99, 1, 10])) // => ???

const removeDuplicates = (arr) => {
  let seen = {}
  let output = []
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!seen[num]) {
      output.push(num)
      seen[num] = true
    }
  }
  return output;
}

// removeDuplicates Big O
// Time: O (n). Only traversing the array once 
// Space: O (x), where x is the number of unique elements
// console.log(removeDuplicates([1, 2, 2, 2, 4, 2, 3, 1])) // => ???
// console.log(removeDuplicates([1, 2, 3, 3, 4])) // => ???
// console.log(removeDuplicates([66, 66, 66, 66, 66, 66])) // => ???
// console.log(removeDuplicates([100, 99, 1, 10])) // => ???

