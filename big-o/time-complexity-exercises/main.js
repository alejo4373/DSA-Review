const { howLongDoesItTake } = require('./util')
const ONE_MILLION = 1000000
const ONE_THOUSAND = 1000

// Create some arrays
let a = [1]
let b = [1, 2]
let c = new Array(1 * ONE_MILLION)
let d = new Array(2 * ONE_MILLION)
let e = new Array(4 * ONE_MILLION)
let f = new Array(8 * ONE_MILLION)
let g = new Array(16 * ONE_MILLION)

// Fill those arrays
c.fill(6)
d.fill('hello')
e.fill(true)
f.fill(8)
g.fill(false)

function constantTime(arr) {
  if (arr.length === 0) { return }
  // Access the first element of an array
  console.log(arr[0])
}

// howLongDoesItTake(() => constantTime(a))
// howLongDoesItTake(() => constantTime(b))
// howLongDoesItTake(() => constantTime(c))
// howLongDoesItTake(() => constantTime(d))
// howLongDoesItTake(() => constantTime(f))
// howLongDoesItTake(() => constantTime(e))

function linearTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Access each element of the array
    let elem = arr[i]
    // console.log(elem)
  }
}

function quadraticTime(arr) {
  let total = 0
  for (let elemOne of arr) {
    for (let elemTwo of arr) {
      if (elemTwo === 'bye' && elemOne === 'world') {
        console.log('bye and world found')
      }
    }
  }
  return total;
}

// Instruct the v8 engine to never optimize our functions
% NeverOptimizeFunction(constantTime);
% NeverOptimizeFunction(linearTime);
% NeverOptimizeFunction(quadraticTime);

// howLongDoesItTake(() => constantTime(a))
// howLongDoesItTake(() => constantTime(b))
// howLongDoesItTake(() => constantTime(c))
// howLongDoesItTake(() => constantTime(d))
// howLongDoesItTake(() => constantTime(f))
// howLongDoesItTake(() => constantTime(e))

// howLongDoesItTake(() => linearTime(a))
// howLongDoesItTake(() => linearTime(b))
// howLongDoesItTake(() => linearTime(c))
// howLongDoesItTake(() => linearTime(d))
// howLongDoesItTake(() => linearTime(e))
// howLongDoesItTake(() => linearTime(f))
// howLongDoesItTake(() => linearTime(g))

// n = arr.length = 3
// combination of all pairs = n * n = 9
// howLongDoesItTake(() => { quadraticTime([1, 2, 3]) })

// Quadratic times gets bad really quickly so lowering 
// to use thousands instead of millions
let aa = [1]
let bb = [1, 2]
let cc = new Array(1 * ONE_THOUSAND)
let dd = new Array(2 * ONE_THOUSAND)
let ee = new Array(3 * ONE_THOUSAND)
let ff = new Array(4 * ONE_THOUSAND)
let gg = new Array(5 * ONE_THOUSAND)
let hh = new Array(6 * ONE_THOUSAND)
let ii = new Array(7 * ONE_THOUSAND)
let jj = new Array(8 * ONE_THOUSAND)
let kk = new Array(9 * ONE_THOUSAND)

// Fill those arrays
cc.fill('hello')
dd.fill('hello')
ff.fill('hello')
ee.fill('hello')
gg.fill('hello')
hh.fill('hello')
ii.fill('hello')
jj.fill('hello')
kk.fill('hello')

howLongDoesItTake(() => quadraticTime(aa))
howLongDoesItTake(() => quadraticTime(bb))
howLongDoesItTake(() => quadraticTime(cc))
howLongDoesItTake(() => quadraticTime(dd))
howLongDoesItTake(() => quadraticTime(ee))
howLongDoesItTake(() => quadraticTime(ff))
howLongDoesItTake(() => quadraticTime(gg))
howLongDoesItTake(() => quadraticTime(hh))
howLongDoesItTake(() => quadraticTime(ii))
howLongDoesItTake(() => quadraticTime(jj))
howLongDoesItTake(() => quadraticTime(kk))
