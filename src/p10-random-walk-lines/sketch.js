// Paramètres
var agentSize = 2;
var stepSize = 10;
var timeIntervalBetweenUpdates = 100;
// ----------

var agentPosition;
var agentPreviousPosition; // Stockage de la position précédente
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
    background(255, 255, 255, 3);
    stroke(0); // Attention à bien adapter les méthodes de dessin. Nous utilisons 'line' et non plus 'ellipse'
    strokeWeight(agentSize);
    noFill();
    line(agentPreviousPosition.x, agentPreviousPosition.y, agentPosition.x, agentPosition.y); // Tracer une ligne entre la position précédente et la nouvelle position permet d'éviter d'obtenir des trajectoires 'en pointillé'.
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
    agentPreviousPosition = agentPosition.copy(); // Initialisation de la variable de stockage. Important : il faut utiliser la méthode 'copy' pour effectivement copier le vecteur. Un simple assignement ('agentPreviousPosition = agentPosition') créerait simplement une référence.

}

function updatePosition() {
    agentPreviousPosition = agentPosition.copy(); // Sauvegarde de la position précédente
    agentPosition.x += cos(agentAngle) * stepSize;
    agentPosition.y += sin(agentAngle) * stepSize;
}