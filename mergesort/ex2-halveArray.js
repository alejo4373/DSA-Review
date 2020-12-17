// Write function `halveArray` divides an array into halves and returns and object with two properties left and right.
const halveArray = (arr) => {
  if (arr.length < 2) return arr;

  // Mid point of the array and halves
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return {
    left: left,
    right: right
  }
}

let arr = [6, 5, 3, 1, 8, 7, 2, 4]
console.log(halveArray(arr)) // => {
//                      left: [6, 5, 3, 1],
//                      right: [8, 7, 2, 4]
//                    } 


