const sayHi = (times) => {
  if (times < 0) return
  if (times === 0) return

  console.log("Hi");

  sayHi(times - 1);
}

// sayHi(7)
sayHi(-1)

// Write recursive function `count(start, end)`
// that counts up starting at `start` and ending at `end`
// not including end. console.log the current number
const count = (start, end) => {
  if (start > end) return // can't count down
  if (start === end) return // There's nothing to count

  console.log(start)

  count(start + 1, end)
}

const fib = (n) => {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}

// console.log(fib(100))

// What are simples/smallest count
// count(1, 1) // -> should not print
// count(3, 1) // -> should not print
// count(1, 2) // -> should print 1

// count(10, 20)
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19

const containsA = (str) => {
  if (str.length === 0) return false
  if (str[0].toLowerCase() === 'a') return true
  return containsA(str.slice(1))
}

console.log(containsA('')) // Smallest -> false
console.log(containsA('a')) // 2nd Smallest -> true
console.log(containsA('ola')) // -> true
console.log(containsA('hello')) // -> false
console.log(containsA('ghjAghj')) // -> true
