
/* 
  Find the following for the function bar
  Time Complexity: O(n)
  Space complexity: O(1). Count is increasing but no matter what number increases to, in JavaScript any number is stored in fixed size (64 bits)
*/
const countVowels = (str) => {
  const vowels = 'aeiou';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) { // Constant time because it doesn't matter how big str it will always loop the same amount of times (5)
      count++
    }
  }
  return count
}

// console.log(countVowels('hEllO')) // => 2
// console.log(countVowels('The quick brown fox jumps over the lazy dog')) // => 11

/*
  removeVowels
  Time Complexity: O(n)
  Space complexity: O(x). Where x is the number of vowels in the string. Or O(n) in the worst case when there is no vowels in the input string.
*/
const removeVowels = (str) => {
  const vowels = 'aeiou';
  let output = ''

  for (let char of str.toLowerCase()) {
    if (!vowels.includes(char)) {
      output += char
    }
  }
  return output
}

// console.log(removeVowels('eouia')) // => "" // Best Case: O(1) constant when all chars are vowels
// console.log(removeVowels('qwrty')) // => "qwrty" // Worst case/Max space used: Up to the string length O (n) linear. n = str.length
// console.log(removeVowels('hEllO')) // => "hll"
// console.log(removeVowels('The quick brown fox jumps over the lazy dog')) // => "th qck brwn fx jmps vr th lzy dg"
// console.log(removeVowels('gdyzlhtrvspmjxfnwrbkcqht')) // => "gdyzlhtrvspmjxfnwrbkcqht"

/*
  removeVowelsRec (recursive)
  Time Complexity: O(n)
  Space complexity: O(n^2). Due to copies of the string being created by str.slice. Derived from O(n + n^2) where the first n is the number of calls in the callstack and n^2 is the total number of characters created by all the slices in each recursive call. We take the dominant term n^2 and discard the non dominant n.
*/
const countVowelsRec = (str) => {
  const vowels = 'aeiou';
  if (str.length === 0) return 0
  if (vowels.includes(str[0])) {
    return 1 + countVowelsRec(str.slice(1))
  }
  return countVowelsRec(str.slice(1))
}

// console.log(countVowelsRec('hEllO')) // => 2
// console.log(countVowelsRec('The quick brown fox jumps over the lazy dog')) // => 11
// console.log(countVowelsRec('gdyzlhtrvspmjxfnwrbkcqht')) // => 0 

/*
  removeVowelsRecImproved (recursive & improved)
  Time Complexity: O(n)
  Space complexity: O(n). n calls in the callstack due to recursion. Use an index i to avoid having to slice the string and thus creating unnecessary copies of it.
*/
const countVowelsRecImproved = (str, i) => {
  const vowels = 'aeiou';
  if (i === str.length) return 0
  if (vowels.includes(str[i].toLowerCase())) {
    return 1 + countVowelsRecImproved(str, i + 1)
  }
  return countVowelsRecImproved(str, i + 1)
}

// console.log(countVowelsRecImproved('hEllO', 0)) // => 2
// console.log(countVowelsRecImproved('The quick brown fox jumps over the lazy dog', 0)) // => 11
// console.log(countVowelsRecImproved('gdyzlhtrvspmjxfnwrbkcqht', 0)) // =>  0

/*
  Write a function that returns all possible pairings of an array of numbers
  A number cannot be paired with itself
  All numbers are unique
  Time Complexity: O(n^2)
  Space complexity: O(n^2). 
*/
const pairNumbers = (arr) => {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        let a = arr[i]
        let b = arr[j]
        output.push([a, b])
      }
    }
  }
  return output
}

// console.log(pairNumbers([1, 2])) // => [[1, 2], [2, 1]]
// console.log(pairNumbers([1, 2, 3])) //=> [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
// console.log(pairNumbers([1, 2, 3, 4])) // => [
// [1, 2], [1, 3], [1, 4],
// [2, 1], [2, 3], [2, 4], 
// [3, 1], [3, 2], [3, 4], 
// [4, 1], [4, 2], [4, 3]
// ]
// console.log(pairNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length) //=> 90 pairs. If we observe the rate at which this is increasing with respect to the input size we see is quadratic.

