const numbers = [[8, 1, 9],
[7, 0, 2],
[6, 9, 3]]

const findTargetInMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[0]
    for (let j = 0; j < row.length; j++) {
      if (matrix[i][j] === target) {
        return true
      }
    }
  }
  return false
}

// console.log(findTargetInMatrix(numbers, 10)) // => false
// console.log(findTargetInMatrix(numbers, 3)) // => true
// console.log(findTargetInMatrix(numbers, 0)) // => true

// Count the number of times a number can be divided by two
const timesDivisibleByTwo = (num) => {
  let counter = 0
  while (num !== 1) {
    num = Math.floor(num / 2)
    counter++
  }
  return counter
}

console.log(timesDivisibleByTwo(4)) // => 2
console.log(timesDivisibleByTwo(8)) // => 3
console.log(timesDivisibleByTwo(16)) // => 4
console.log(timesDivisibleByTwo(32)) // => 5
console.log(timesDivisibleByTwo(1024) )// => 10
console.log(timesDivisibleByTwo(9007199254740991))

// const timesMultipliedToSqr = (num) => {
//   let counter = 0
//   let sqr = num * num
//   let i = 1
//   while (i < sqr) {
//     i = i * i
//     counter++
//   }
//   return counter
// }
// console.log(timesMultipliedToSqr(4)) // => 4
// console.log(timesMultipliedToSqr(16)) // => 8
// console.log(timesMultipliedToSqr(32)) // => 9
// console.log(timesMultipliedToSqr(64)) // => 10
// console.log(timesMultipliedToSqr(1024)) // => 10


const timesDivisibleByTwoRec = (num) => {
  if (num === 1) {
    return 1
  } else {
    return 1 + timesDivisibleByTwo(num / 2)
  }
}

// console.log(timesDivisibleByTwoRec(4)) // => 2
// console.log(timesDivisibleByTwoRec(16)) // => 4
// console.log(timesDivisibleByTwoRec(1024)) // => 10

const getAge = (user) => {
  let reps = 0
  for (let i = 10; i > 0; i--) {
    reps++
  }
  return user.age
}

getAge({ name: 'Joel', age: 46 })

const calculateAverageAge = (users) => {
  let sumOfAges = 0;
  for (let user of users) {
    sumOfAges += user.age
  }

  return (sumOfAges / users.length)
}
