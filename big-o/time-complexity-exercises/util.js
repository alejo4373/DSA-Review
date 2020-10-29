const howLongDoesItTake = (fn) => {
  let start = Date.now()
  fn()
  let end = Date.now()
  let diff = end - start;

  console.log(`function took ${diff}ms`)
}

module.exports = {
  howLongDoesItTake
}
