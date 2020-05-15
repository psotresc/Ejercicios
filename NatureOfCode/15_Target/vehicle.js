class Vehicle {
  constructor(x,y) {
    this.accelaration = createVector(0,0);
    this.velocity = createVector(0,0);
    this.position = createVector(this.x,this.y);
    this.r = 6;

    this.maxSpeed = 8;
    this.maxForce =0.2;
  }

  update(){
    this.velocity.add(this.accelaration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.accelaration.mult(0);
  }

  applyForce(force){
    this.accelaration.add(force);
  }

  seek(target){
    this.desired = p5.Vector.sub(target,this.position);
    this.desired.mult(0.05);
    // this.desired.setMag(this.maxSpeed);

    var steer = p5.Vector.sub(this.desired,this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  display(){
    let theta = this.velocity.heading() + PI/2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}
