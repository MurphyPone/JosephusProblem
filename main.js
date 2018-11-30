let crowd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("test")
  crowd = new DoublyLinkedCircularList(5);
  //console.log( crowd.josephus() );
  console.log( crowd.formula() );
  frameRate(1);
}

function draw() {
  background(51);
  crowd.show();
  crowd.josephus();
  noLoop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    crowd.josephusButton();
  }
}
