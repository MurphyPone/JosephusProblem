class DoublyLinkedCircularList {
  //n is the # of nodes to add
  constructor(n) {
    this.n = n;
    this.head = new Node(1, null, null);
    this.head.setNext(this.head);
    this.head.setPrev(this.head);
    var i = 2;
    while(i <= n) {
      this.add( new Node(i++, this.head, this.head.getPrev() ) );
    }
  }

  //Main Methods
  josephus() {
    let node = this.head;
    while( node.getNext() != node ) { //while the length > 1
      this.removeNext(node);
      node = node.getNext();
    }
    return node.getValue();
  }

  formula() {
    let a = -1;
    while(Math.pow(2, a+1) < this.n) { a++; } // find the largest power that goes into n
    var l = this.n - ( Math.pow(2, a) ); //find the remainder
    return (2*l + 1); //return the formula
  }

  show() {
    translate(width/2, height/2); //draw from center
    stroke(255);
    strokeWeight(8);
    let node = this.head;
    let i = 0;
    while(node.getNext() != node ) {
      let angle = i * TWO_PI / this.n;
      point(10*cos(angle), 10*sin(angle)); //TODO fix this
      node = node.getNext();
      i++;
    }

  }

  //Helpers
  add(node) {
    this.head.getPrev().setNext(node);
    this.head.setPrev(node);
  }

  removeNext(node) {
    var removeMe = node.getNext();
    removeMe.getNext().setPrev(node);
    node.setNext( removeMe.getNext() );
  }
}
