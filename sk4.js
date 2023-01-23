function setup() {
    createCanvas(460, 460);
    frameRate(60);
}

function draw() {
    background(0, 0, 127);

    push();
    stroke(255, 255, 255);
    strokeWeight(5);
    fill(0, 127, 0);
    ellipse(245, 245, 225, 225);
    //circle(250, 250, 250);
    pop();

    push();
    stroke(255, 255, 255);
    strokeWeight(5);
    beginShape();
    vertex(360, 210);
    vertex(280, 210);
    vertex(250, 125);
    vertex(210, 210);
    vertex(130, 210);
    vertex(195, 265);
    vertex(170, 335);
    vertex(245, 295);
    vertex(320, 335);
    vertex(295, 265);
    endShape();
    pop();

    push();
    beginShape();
    fill(225, 0, 0);
    stroke(255, 255, 255);
    strokeWeight(4);
    vertex(360, 210);
    vertex(280, 210);
    vertex(250, 125);
    vertex(210, 210);
    vertex(130, 210);
    vertex(195, 265);
    vertex(170, 335);
    vertex(245, 295);
    vertex(320, 335);
    vertex(295, 265);
    endShape();
    pop();
}
