const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

class Node {
    constructor(value) {
        this.value = String(value);
        this.next = null;
    }
}

export default {
  head: null,
  length: 0,
}
const chainMaker = {
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (arguments.length == 0) value = "";
    if (this.length == 0) {
      this.head = new Node(value);
    } else {
      let h = this.head;
      while (h.next) {
        h = h.next;
      }
      h.next = new Node(value);
    }
    this.length++;
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.length ||
      isNaN(position) ||
      Math.round(position) != position
    ) {
        let j = this.length;
        for (let i = 0; i < j; i++) {
          this.removeLink(1);
        }
        throw new Error("You can't remove incorrect link!");
    }
      
    let h = this.head;
    let counter = 1;
    if (position == 1) {
      this.head = h.next;
      this.length--;
      return this;
    }
    while (counter != position - 1) {
      h = h.next;
      counter++;
    }
    if (position != this.length) {
      h.next = h.next.next;
    } else {
      h.next = null;
    }
    this.length--;
    return this;
  },
  reverseChain() {
    let k = this.getLength() - 1;
    while (k > 0) {
      let count = 1;
      let cur = this.head;
      console.log(count, k, cur.value);
      while (count < k) {
        cur = cur.next;
        count++;
      }
      this.addLink(cur.value);
      this.removeLink(count);
      k--;
    }
    return this;
  },
  finishChain() {
    let print = `( ${this.head.value} )`;
    let cur = this.head.next;
    while (cur) {
      print += `~~( ${cur.value} )`;
      cur = cur.next;
    }
    let j = this.length;
    for (let i = 0; i < j; i++) {
        this.removeLink(1);
    }
    return print;
  },
};

module.exports = {
  chainMaker
};
