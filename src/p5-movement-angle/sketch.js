// Paramètres
var agentSize = 10;
var stepSize = 2;
// ----------

var agentPosition;
var agentAngle;

function setup() {
    createCanvas(540, 540);
    agentPosition = createVector(random(width), random(height)); // Position aléatoire
    agentAngle = random(0, TWO_PI); // Direction aléatoire
    background(255);
}

function draw() {
    // Mise à jour de la position
    agentPosition.x += cos(agentAngle) * stepSize;
    agentPosition.y += sin(agentAngle) * stepSize;
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        agentPosition = createVector(random(width), random(height)); // Si l'agent sort de l'espace de dessin, on lui donne une nouvelle position aléatoire
    }
    // Dessin
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, agentSize, agentSize);
}