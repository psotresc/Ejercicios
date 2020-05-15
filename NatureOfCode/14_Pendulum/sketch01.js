let pendulum;

function setup() {
  createCanvas(500 ,500);
  pendulumA = new Pendulum(new PVector(width/2,10),125);

}

function draw() {

  let gravity = 0.4;
  aAcceleration =-1* gravity* sin(angle);
  aVelocity+=aAcceleration;
  angle+=aVelocity;
  let r =125;
  let origin = createVector(100,10);
  let location = createVector(r*sin(angle),r*cos(angle));
  location.add(origin);

  stroke(0);
  fill(175);
  line(origin.x,origin.y,location.x,location.y);
  ellipse(location.x,location.y,16,16);

  aAcceleration = (-1 * gravity * sin(angle)) / r;
}
