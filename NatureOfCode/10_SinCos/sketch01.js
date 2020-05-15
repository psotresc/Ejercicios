let r = 30;
let theta = 0;

function setup() {
    createCanvas(640,640);
    background(255);

}

function draw() {
    let x = r * cos(theta);
    let y = r * sin(theta);

    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(x+width/2, y+height/2, 16, 16);

    ellipse(-x+width/2+10, -y+height/2+10, 16, 16);

    theta += 0.1;
    r += .5;

    if(r>450){
      r = 30;
      fill(255);

      ellipse(x+width/2, y+height/2, 16, 16);

      ellipse(-x+width/2+10, -y+height/2+10, 16, 16);
    }
}
