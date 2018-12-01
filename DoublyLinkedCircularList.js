class DoublyLinkedCircularList {
  //n is the # of nodes to add
  constructor(n) {
    this.n = n;
    this.head = new Node(1, null, null);
    this.head.setNext(this.head);
    this.head.setPrev(this.head);
    this.current = this.head;

    var i = 2;
    while(i <= n) {
      this.add( new Node(i++, this.head, this.head.getPrev() ) ); //something wrong with insert
    }
  }

  //Main Methods
  josephus() {
    let node = this.head;
    while( node.getNext().getValue() != node.getValue() ) { //while the length > 1
      this.removeNext(node);
      node = node.getNext();
    }
    return node.getValue();
  }

  //Assumes this.current.isAlive
  josephusButton() {
    var toKill = this.current.getNext();
    if( this.current.getValue() == toKill.getValue() ) { // if everyone is dead
      console.log("no people left to kill :(");
      return "no one left to kill"
    } else {  //Else, find the next living node
      if(!toKill.isAlive) {
        while(!toKill.isAlive) {
          toKill = toKill.getNext(); //find the adjacent & alive node
        }
      }
      toKill.isAlive = false; // killem

      this.current = toKill.getNext();
      while(!this.current.isAlive) {
        this.current = this.current.getNext();
      }

      console.log("killed: " + toKill.getValue());
    }
  }

  formula() {
    let a = -1;
    while(Math.pow(2, a+1) < this.n) { a++; } // find the largest power that goes into n
    var l = this.n - ( Math.pow(2, a) ); //find the remainder
    return (2*l + 1); //return the formula
  }

  show() {
    translate(width/2, height/2); //draw from center
    let node = this.head;
    let i = 0;
    while(i < this.n) { // this is poor programming
      //place dots
      let angle = (i++ * TWO_PI / this.n) - PI/2;
      let x = 5 * this.n * cos(angle);
      let y = 5 * this.n * sin(angle);

      //Drawing config
      color(255);
      fill(255);
      stroke(255);

      if (i == this.formula() ) { // if chosen
        color(0, 255, 0);
        fill(0, 255, 0);
        stroke(0, 255, 0);
      }

      if(!node.isAlive) { //if dead
        color(100);
        fill(100);
        stroke(100);
      }

      if(node.getValue() == this.current.getValue()) { //display current
        color(255, 199, 0);
        fill(255, 199, 0);
        stroke(255, 199, 0);
      }

      text(i, x, y);
      node = node.getNext();
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
    removeMe.isAlive = false;
    node.setNext( removeMe.getNext() );
  }
}
