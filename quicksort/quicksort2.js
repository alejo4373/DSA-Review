const partition = (arr, i, j) => {
  let p = arr[i];
  let m = i;
  for (let k = i + 1; k <= j; k++) {
    if (arr[k] < p) {
      m++
      swap(arr, k, m)
    }
  }
  swap(arr, i, m)
  return m;
}

const quickSort2 = (arr, low, high) => {
  if (low < high) {
    let m = partition(arr, low, high)
    quickSort2(arr, low, m - 1)
    quickSort2(arr, m + 1, high)
  }

  return arr
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}
// console.log(quickSort2([27, 38, 12, 39, 27, 16], 0, 6))
console.log(quickSort2([11, 8, 15, 10, 4, 14, 2], 0, 6))

