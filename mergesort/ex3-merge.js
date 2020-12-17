// Write a function merge that takes in two sorted arrays a and b, merge them in order and returns a new sorted array.

const merge = (left, right) => {
  // Understand that you will need two pointers/indices to compare each array
  let l = 0;
  let r = 0;

  // We need to store the values from least to greatest in an array and return it
  let result = [];


  // We need to loop through both left and right at the same time 
  while (l < left.length && r < right.length) {

    // Compare values at both pointers/indices and push the smaller value to the result array
    if (left[l] < right[r]) {
      result.push(left[l])
      l++;
    } else {
      result.push(right[r])
      r++;
    }
  }

  // Add any leftovers to the result array    
  while (l < left.length) {
    result.push(left[l])
    l++
  }

  while (r < right.length) {
    result.push(right[r])
    r++
  }

  return result
}

let a = [1, 3, 4, 7]
let b = [2, 5, 6, 8]
console.log(merge(a, b)) // => [1, 2, 3, 4, 5, 6, 7, 8]
