const fact = (n) => {
  // base case
  if (n < 0) return -1
  if (n <= 1) return 1

  return n * fact(n - 1)
}

console.log(fact(-1)) // -1
console.log(fact(0)) // 1
console.log(fact(1)) // 1
console.log(fact(2)) // 2
console.log(fact(3)) // 6
console.log(fact(5)) // 120
