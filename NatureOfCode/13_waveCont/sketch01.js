let angle = 0;
let angleVel = 0.1;
let amplitude = 100;

function setup() {
  createCanvas(500 ,500);


}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  for(let x = 0; x<=width; x+=5){
    let y = map(sin(angle),-1,1,0,height);
    vertex(x,y);
    angle += angleVel;
  }
  endShape();



}
