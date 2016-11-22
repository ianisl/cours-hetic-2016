// Paramètres
var agentCount = 5000;
var agentSize = 2;
var minStepSize = 0.2; // Chaque agent sera initialisé avec un 'stepSize' choisi aléatoirement entre 'minStepSize' et 'maxStepSize'
var maxStepSize = 4;
var timeIntervalBetweenUpdates = 300;
// ----------

var agents;
var timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        a.stepSize = random(minStepSize, maxStepSize); // La variable temporaire 'a' permet d'éditer facilement les propriétés de chaque nouvel agent créé
        agents.push(a);
    };
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    var currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agents.forEach(function(a) {
            a.angle = random(0, TWO_PI);
        });
    }
    agents.forEach(function(a) {
        a.updatePosition();
    });
    // Dessin
    background(255, 255, 255, 3);
    stroke(0);
    strokeWeight(agentSize);
    noFill();
    agents.forEach(function (a) {
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}