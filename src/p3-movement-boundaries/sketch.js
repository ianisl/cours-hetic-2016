var x;
var y;

function setup() {
    createCanvas(540, 540);
    x = 0;
    y = height/2;
    background(255);
}

function draw() {
    // Mise à jour de la position
    x += 2;
    // Conditions aux limites (boundary conditions)
    if (x > width) {
        x = 0;
    }
    // Dessin
    background(255);
    noStroke();
    fill(0);
    ellipse(x, y, 10, 10);
}