// Paramètres
var agentSize = 10;
var stepSize = 2;
var timeIntervalBetweenUpdates = 300; // Intervalle temporel (en millisecondes) entre deux mises à jour de l'angle de l'agent
// ----------

var agentPosition;
var agentAngle;
var timeOfLastUpdate; // Stockage du moment où a eu lieu la dernière mise à jour de l'angle de l'agent

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis(); // Initialisation du compteur
}

function draw() {
    var currentTime = millis(); // Très important: stocker le temps dans une variable au début de 'draw' (n'appeler qu'une seule fois 'millis')
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI); // Si une durée suffisante s'est écoulée : définition d'un nouvel angle
    }
    updatePosition();
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Dessin
    background(255);
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