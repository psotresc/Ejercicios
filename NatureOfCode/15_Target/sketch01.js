let v;
let v2;

function setup() {
  createCanvas(500 ,500);
  v = new Vehicle(width / 2, height / 2);
  v2 = new Vehicle(width / 1, height / 1);

}

function draw() {
  background(51);

 let mouse = createVector(mouseX, mouseY);

 // Draw an ellipse at the mouse position
 fill(127);
 stroke(200);
 strokeWeight(2);
 ellipse(mouse.x, mouse.y, 48, 48);

 // Call the appropriate steering behaviors for our agents
 v.seek(mouse);
 v.update();
 v.display();

 v2.seek(mouse);
 v2.update();
 v2.display();

}
