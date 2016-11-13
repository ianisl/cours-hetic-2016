// Paramètres
var agentSize = 2;
var stepSize = 2;
var timeIntervalBetweenUpdates = 100;
// ----------

var agentPosition;
var agentAngle;
var timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    var currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI);
    }
    updatePosition();
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Dessin
    background(255, 255, 255, 3); // Rafraîchissement de l'écran avec une couleur transparente
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, agentSize, agentSize);
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
}

function updatePosition() {
    agentPosition.x += cos(agentAngle) * stepSize;
    agentPosition.y += sin(agentAngle) * stepSize;
}