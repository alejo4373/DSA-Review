const quickSort = (arr) => {
  if (arr.length < 2) return arr
  let middle = Math.floor(arr.length / 2)
  let pivot = arr[middle]
  let lessThanPivot = []
  let equalToPivot = []
  let greaterThanPivot = []

  for (let num of arr) {
    if (num < pivot) {
      lessThanPivot.push(num)
    } else if (num > pivot) {
      greaterThanPivot.push(num)
    } else {
      equalToPivot.push(num)
    }
  }

  let leftSorted = quickSort(lessThanPivot)
  let rightSorted = quickSort(greaterThanPivot)

  return [...leftSorted, ...equalToPivot, ...rightSorted]
}

// console.log(quickSort([27, 38, 12, 39, 27, 16]))
console.log(quickSort([11, 8, 15, 10, 4, 14, 2]))


