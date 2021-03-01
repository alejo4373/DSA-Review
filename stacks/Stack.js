/**
 * Stack data structure implemented with an array
 * @class
 */
class Stack {
  constructor() {
    this.stack = []
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    return this.stack.pop();
  }

  push(val) {
    this.stack.push(val);
  }

  isEmpty() {
    return this.stack.length ? false : true
  }
}

module.exports = Stack
