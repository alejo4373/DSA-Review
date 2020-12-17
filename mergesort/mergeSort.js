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

// Previously halveArray
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  // Mid point of the array and halves
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  // Recursive calls
  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)

  // Merge
  return merge(sortedLeft, sortedRight)
}

console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]))
