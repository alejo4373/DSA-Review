class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val)
    if (this.head) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let originalHead = this.head
      this.head = this.head.next
      this.length -= 1;

      // Last node removed? Set tail to null
      if (!this.head) {
        this.tail = null
      }

      return originalHead.val
    }
    throw new Error("Queue is empty. Nothing to dequeue")
  };

  peek() {
    if (this.head) {
      return this.head.val
    }

    throw new Error("Queue is empty. Nothing to peek")
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.length
  };
}

let fellows = new Queue()

fellows.enqueue("Johanne")
fellows.enqueue("Owen")
fellows.enqueue("Jonathan")


const printQueue2 = (q) => {
  let str = "";
  let rotations = q.size()
  while (rotations > 0) {
    let elem = q.dequeue()
    str += elem + " <- "
    q.enqueue(elem)
    rotations--
  }

  return str
}

console.log(printQueue2(fellows))
console.log('enqueue JR', fellows.enqueue("JR"))
console.log(printQueue2(fellows))

while (!fellows.isEmpty()) {
  fellows.dequeue()
}

// Supposed to have emptied the fellows Queue
console.log('empty =>', printQueue2(fellows))
console.log('not really empty', fellows)
fellows.enqueue('Alejo')
console.log('Alejo =>', printQueue2(fellows))
fellows.enqueue('Nilber')
console.log('Nilber =>', printQueue2(fellows))

// SOLID Principles
// Single Responsibility
