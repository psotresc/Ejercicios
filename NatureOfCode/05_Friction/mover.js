class Mover {
  constructor(x,y,m) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r  = sqrt(this.mass)*10;
    this.coloritoR =random(0,255);
    this.coloritoG =random(0,255);
    this.coloritoB =random(0,255);

  }

  friction(){
    let diff = height - (this.pos.y +this.r);
    if(diff<1){
      // console.log("Friction");
      // Direction Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude Friction
      let normal = this.mass;
      friction.setMag(mu * normal);
      this.applyForce(friction);
    }
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
   }

   edges(){
     if(this.pos.y >= height-this.r){
       this.pos.y = height-this.r;
       this.vel.y *= -1;
     }
     if(this.pos.x>= width-this.r){
       this.pos.x = width-this.r;
       this.vel.x *= -1;
     }
     if(this.pos.x<= 0+this.r){
       this.pos.x = this.r;
       this.vel.x *= -1;
     }
   }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  show(){
    stroke(255);
    strokeWeight(2);
    fill(this.coloritoR,this.coloritoG,this.coloritoB,100);
    ellipse(this.pos.x,this.pos.y,this.r*2);

  }
}
