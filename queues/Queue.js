class Queue {
  constructor() {
    this.arr = [];
  }

  // O(1) - Constant
  enqueue(value) {
    this.arr.push(value);
  }

  // O(n) - Linear 
  dequeue() {
    return this.arr.shift();
  }

  // O(1) - Constant 
  peek() {
    return this.arr[0];
  }

  // O (1) - Constant
  isEmpty() {
    return this.arr.length === 0;
  }

  // O (1) - Constant
  size() {
    return this.arr.length
  }

}

// Creating and instance of the Queue
let fellows = new Queue()

fellows.enqueue("Johanne")
fellows.enqueue("Owen")
fellows.enqueue("Jonathan")
fellows.enqueue("Marializa")
fellows.enqueue("Nilber")
fellows.enqueue("Jovanny")
fellows.enqueue("Sihame")
fellows.enqueue("Jay")
fellows.enqueue("Ashya")
fellows.enqueue("Alejo")

// console.log(fellows)

// Takes in a Queue instance `q` as an argument
// Returns a string in the format bellow
// "Johanne<-Owen<-Jonathan<-Marializa<-..."
const printQueue = (q) => {
  // Iterate through Queue 
  // return q.arr.join('<-') // Brakes the rules of the Queue
  let temp = new Queue();
  let str = "";
  while (!q.isEmpty()) {
    let elem = q.dequeue()
    str += elem + " <- "
    temp.enqueue(elem)
  }

  while (!temp.isEmpty()) {
    q.enqueue(temp.dequeue())
  }

  return str
}

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

const copy = (q) => {
  let rotations = q.size()
  let temp = new Queue()
  while (rotations > 0) {
    let elem = q.dequeue()
    q.enqueue(elem)
    temp.enqueue(elem)
    rotations--
  }

  return temp
}

console.log(printQueue2(fellows))
console.log('enqueue JR', fellows.enqueue("JR"))
const fellowsCopy = copy(fellows)
fellowsCopy.enqueue('Wynter')
console.log('dequeue', fellows.dequeue())
console.log('fellows =>', printQueue2(fellows))
