let movers = [];
let mu = 0.1;
let dragC = 0.10;

function setup() {
  createCanvas(400,400);
  for(let i = 0;i<10; i++){
    movers[i] = new Mover(random(width),50,random(1,3));
  }
}

function draw() {
  background(0);

  fill(255,125);
  noStroke();
  rect(0,height/2,width,height/2);

  for(let mover of movers){
    if (mouseIsPressed){
      let wind = createVector(0,-2);
      mover.applyForce(wind);
    }

    let gravity = createVector(0,0.1);
    let weight = createVector(gravity,mover.mass);
    mover.applyForce(weight);

    if(mover.pos.y > height/2){
      mover.drag(dragC);
    }

    mover.update();
    mover.edges();

    mover.show();
  }
}
