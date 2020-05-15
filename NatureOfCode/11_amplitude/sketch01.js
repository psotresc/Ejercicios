let amplitude = 200;
let period = 60;
let x = 0;

let angle = 0;
let aVelocity = 0.05;



function setup() {
  createCanvas(500 ,500);

}

function draw() {
  background(255);
  // x = amplitude * cos(TWO_PI * frameCount / period);
  x = amplitude * cos(angle);

  angle += aVelocity;

  translate(width/2,height/2);
  ellipseMode(CENTER);
  stroke(0);
  fill(175);
  line(0,0,x,0);
  ellipse(x,0,20,20);
}
