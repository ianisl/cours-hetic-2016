// Paramètres
var agentCount = 1000;
var agentSize = 5;
var agentAlpha = 5; // Pour de meilleurs effets de trace, on désactive complètement le rafraîchissement de l'écran et on dessine en transparence
var minStepSize = 0.2;
var maxStepSize = 2;
var timeIntervalBetweenUpdates = 100;
// ----------

var agents;
var timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        a.stepSize = random(minStepSize, maxStepSize);
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
    stroke(0, agentAlpha); // Autre manière de spécifier une couleur en niveau de gris avec de la transparence
    strokeWeight(agentSize);
    noFill();
    agents.forEach(function (a) {
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}