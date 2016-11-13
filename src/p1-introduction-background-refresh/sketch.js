function setup() {
    createCanvas(540, 540);
    background(255); // Bonne pratique : rafraîchir l'arrière-plan une première fois dans le 'setup'
}

function draw() {
    background(255); // Rafraîchissement de l'arrière-plan
    // Rectangle
    fill('#FF0000');
    stroke('rgb(0, 0, 0)');
    rect(0, 0, 100, 120);
    // Rectangle
    fill(0, 200, 0);
    noStroke();
    rect(140, 200, 20, 30);
    // Rectangle
    stroke('rgba(100, 0, 200, 0.5)');
    strokeWeight(5);
    noFill();
    rect(150, 210, 40, 40);
    // Ellipse
    stroke(100);
    ellipse(width/2, height/4, 50, 100);
    // Ellipse
    var c1 = color(150, 150, 150);
    stroke(c1);
    ellipse(width/2, 3*height/4, 100, 100);
    // Ligne
    var l = brightness(c1);
    colorMode(HSB);
    var c2 = color(200, 50, l);
    colorMode(RGB);
    stroke(c2);
    strokeWeight(1);
    line(200, 350, 400, 500);
}