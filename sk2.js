/** This function sets up our sketch. */
function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    background(360); 
    // let c = color('hsl(160, 100%, 80%)');
    // let r = color('hsl(20, 100%, 80%)');
    // let b = color('hsl(240, 100%, 80%)');
    // let cb = color('hsl(190, 100%, 40%)');
    let c = color(0, 255, 0, 100);
    let r = color(255, 0, 0, 100);
    let b = color(0, 0, 255, 100);
    let cb = color('hsl(190, 100%, 40%)');

    cnv3 = createGraphics(width,height);
    cnv3.noStroke();
    cnv3.fill(r);
    cnv3.circle(150, 75, 150);
    image(cnv3,0,0);
    
    cnv1 = createGraphics(width,height);
    cnv1.noStroke();
    cnv1.fill(b);
    cnv1.circle(100, 150, 150);
    image(cnv1,0,0);
    
    cnv2 = createGraphics(width,height);
    cnv2.noStroke();
    cnv2.fill(c);
    cnv2.circle(200, 150, 150);
    image(cnv2,0,0);
    // push();
    // fill(r);
    // circle(150, 75, 150);
    // pop();
   
    
    
}
