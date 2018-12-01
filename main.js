let crowd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("test")
  crowd = new DoublyLinkedCircularList(60);
  //console.log( crowd.josephus() );
  console.log( crowd.formula() );
  frameRate(3);
}

function draw() {
  background(51);
  crowd.josephusButton();
  crowd.show();
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == ENTER ) {
    crowd.josephusButton();
  }
}
