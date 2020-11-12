const hash = (key) => {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i)
  }
  return sum;
}


class HashTable {
  constructor(size) {
    this.buckets = new Array(size)
    this.size = size
  }

  insert(key, value) {
    let hashCode = hash(key)
    let bucketIndex = hashCode % this.size
    // console.log(key, hashCode, bucketIndex)

    let node = new Node(key, value)

    if (!this.buckets[bucketIndex]) {
      this.buckets[bucketIndex] = node
    } else if (this.buckets[bucketIndex].key === key) {
      this.buckets[bucketIndex].value = value
    } else {
      let crrNode = this.buckets[bucketIndex]
      while (crrNode.next) {
        if (crrNode.next.key === key) {
          crrNode.next.value = value
          return
        }
        crrNode = crrNode.next
      }
      crrNode.next = node;
    }
  }

  get(key) {
    let hashCode = hash(key)
    let bucketIndex = hashCode % this.size

    let crrNode = this.buckets[bucketIndex]

    if (!crrNode) return undefined
    else if (crrNode.key === key) return crrNode.value
    else {
      while (crrNode.next) {
        if (crrNode.next.key === key) {
          return crrNode.next.value
        }
        crrNode = crrNode.next;
      }
      return undefined
    }
  }

  has(key) { /* Your turn to implement. Return a boolean indicating whether an element with the specified key exists or not. */ }
  delete(key) { /* Removes and returns the element at the specified key. */ }
  keys() { /* Returns an array that contains the keys for each element in the HashTable */ }
  values() { /*  Returns an array that contains the values for each element in the HashTable */ }
  forEach(callback) { /*  Execute the callback function once per each key/value pair in the HashTable. The callback would receive the value of the given element as its argument. */ }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}


let fellowEmails = new HashTable(30)
fellowEmails.insert('Marvin', 'marvinthompson@pursuit.org')
fellowEmails.insert('Douglas', 'douglasmackrell@pursuit.org')
fellowEmails.insert('Johanne', 'johanneenama@pursuit.org')
fellowEmails.insert('Maria', 'marializamartinez@pursuit.org')
fellowEmails.insert('Sihame', 'sihamebazi@pursuit.org')

console.log(fellowEmails.get('Johanne'))
console.log(fellowEmails.get('Sihame'))

// Using a Hash Table to represent a person

// JavaScript Native Object/Hash Map implementation
// with a bunch of optimizations and likely a very good
// hashing function
let person = {
  name: 'Maria',
  class: '6.4',
  car: 'Corvet',
  employed: true
}

// With Our implementation
let samePerson = new HashTable(10) // Arbitrary Initial size imagining we don't need more than 10 keys in our object.
samePerson.insert('name', 'Maria')
samePerson.insert('class', '6.4')
samePerson.insert('car', 'Corvet')
samePerson.insert('employed', true)
