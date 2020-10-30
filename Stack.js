/* eslint-disable no-console */
'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(!this.top) {
      this.top = new _Node(data,null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    if(!this.top) {
      return;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    return !this.top;
  }

  display() {
    if(!this.top) {
      console.log('[ Empty stack ]');
      return;
    }
    process.stdout.write('*');
    let currNode = this.top;
    while(currNode.next) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
    console.log(currNode.data);
  }

}

module.exports = Stack;