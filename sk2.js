/** This function sets up our sketch. */
function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    background(360); 
    
    let c = color(0, 255, 0, 100);
    let r = color(255, 0, 0, 100);
    let b = color(0, 0, 255, 100);
    let cb = color('hsl(190, 100%, 40%)');

    noStroke();
    fill(r);
    circle(150, 75, 150);
    
    fill(b);
    circle(100, 150, 150); 

    fill(c);
    circle(200, 150, 150);
    
}
