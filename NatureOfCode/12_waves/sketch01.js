let angle = 0;
let angleVel = 0.1;
let amplitude = 100;

function setup() {
  createCanvas(500 ,500);

}

function draw() {
  background(255);
  for(let x = 0; x<=width; x+=24){
    let y = amplitude*sin(angle);
    ellipse(x,y+height/2,48,48);
    angle += angleVel;
  }

}
