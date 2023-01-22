function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    background(0);
    push();
    fill(255, 255, 0);
    arc(50, 50, 80, 80, -3/4*PI, 3/4*PI);
    pop();

    push();
    fill(255, 0 , 0);
    rect(100, 10, 80, 80, 50, 50, 0, 0);
    pop();

    ellipse(120, 50, 30);
    ellipse(160, 50, 30);

    push();
    fill(0, 0, 255, 200);
    ellipse(120, 50, 15);
    ellipse(160, 50, 15);
    pop();
}