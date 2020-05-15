class Mover {
  constructor(x,y) {
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.angle = 0;
  }

  update(){
    let mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(1);

    this.vel.add(this.acc);
    this.vel.limit(5);

    this.pos.add(this.vel);
  }

  show(){
     let angle = atan2(this.vel.y/this.vel.x);

     stroke(0);
     fill(175);
     push();
     rectMode(CENTER);
     translate(this.pos.x,this.pos.y);
  // Rotate according to that angle.
     rotate(angle);
     rect(0,0,30,10);
     pop();

  }
}
