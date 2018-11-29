class Node {
  constructor(val, next, prev) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }

  getNext() { return this.next; }
  getPrev() { return this.prev; }
  getValue() { return this.value; }

  setNext(node) { this.next = node; }
  setPrev(node) { this.prev = node; }
  setValue(value) { this.value = node; }
}
