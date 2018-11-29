let crowd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log("test")
  crowd = new DoublyLinkedCircularList(41);
  console.log( crowd.josephus() );
  console.log( crowd.formula() );

}

function draw() {
  background(51);
  crowd.show();
}
