let moverA;
let moverV

function setup() {
  createCanvas(400,400);
  moverA = new Mover(200,200,10);
  moverB = new Mover(300,200,2);
}

function draw() {
  background(0);

  if (mouseIsPressed){
    let wind = createVector(0.1,0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  let gravity = createVector(0,0.1);

  let weightA = createVector(gravity,moverA.mass);
  let weightB = createVector(gravity,moverB.mass);

  moverA.applyForce(weightA);
  moverB.applyForce(weightB);




  moverA.update();
  moverB.update();
  moverA.edges();
  moverB.edges();

  moverA.show();
  moverB.show();
}
