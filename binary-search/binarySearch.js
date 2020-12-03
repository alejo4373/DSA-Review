const binarySearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = arr[mid]
    console.log('=>', guess)

    if (guess === value) {  // Found it
      return mid
    } else if (guess > value) { // Guess was too high
      high = mid - 1
    } else {
      low = mid + 1 // Guess was too low
    }
  }
  return -1 // Element was not found.
}

// let nums = [1, 3, 5, 7, 9, 11, 15, 16, 17, 20, 21]
const arr = require('./arr')
// console.log(binarySearch(arr, 99353))



const findBuggyCommit = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid]
    let prev = arr[mid - 1]

    if (guess === true && prev === false) return mid
    if (guess === true) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1
}

// const commits = require('./commits')
// console.log(findBuggyCommit(commits))

const binarySearchRecursive = (arr, target) => {
  const low = 0;
  const high = arr.length - 1
  const mid = Math.floor((high + low) / 2)
  const guess = arr[mid]
  console.log('length:', arr.length, guess)
  // base case
  if (arr.length === 0) return -1
  if (guess === target) return mid // found target

  // means of progression towards base case
  let leftSide = arr.slice(0, mid)
  let rightSide = arr.slice(mid)

  if (guess > target) {
    // search left side
    return binarySearchRecursive(leftSide, target) // recursive call (call itself)
  } else {
    // search right side
    return mid + binarySearchRecursive(rightSide, target) // recursive call (call itself)
  }
}

// let nums = [1, 3, 5, 7, 9, 11, 15, 16, 17, 20, 21]
// console.log(binarySearchRecursive(nums, 17))

const binarySearchRecursive2 = (arr, low, high, target) => {
  if (low > high) return -1

  const mid = Math.floor((high + low) / 2)
  const guess = arr[mid]

  if (guess === target) return mid // found target

  if (guess > target) {
    return binarySearchRecursive2(arr, low, mid - 1, target) // recursive call (call itself)
  } else {
    return binarySearchRecursive2(arr, mid + 1, high, target) // recursive call (call itself)
  }
}

// console.log(binarySearchRecursive2(nums, 17))


const findNegativeNumbers = (arr, low, high) => {
  if (low > high) return 0

  console.log(arr.slice(low, high + 1))
  const mid = Math.floor((high + low) / 2)
  const guess = arr[mid]
  const prev = arr[mid - 1]

  if (guess < 0 && prev >= 0) return arr.length - mid
  if (guess < 0) {
    return binarySearchRecursive2(arr, low, mid - 1)
  } else {
    return binarySearchRecursive2(arr, mid + 1, high)
  }
}

console.log(findNegativeNumbers([1, 0, -1, -4, -5, -7, -10, -14, -20, -30, -100], 0, nums.length - 1))

