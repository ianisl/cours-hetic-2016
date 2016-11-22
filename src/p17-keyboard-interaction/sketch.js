// Paramètres
var agentCount = 10;
var agentAlpha = 5;
var minStepSize = 0.2;
var maxStepSize = 0.5;
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
    stroke(0, agentAlpha);
    noFill();
    beginShape();
    agents.forEach(function (a) {
        curveVertex(a.position.x, a.position.y);
    });
    if (agents.length > 3) {
        curveVertex(agents[0].position.x, agents[0].position.y);
        curveVertex(agents[1].position.x, agents[1].position.y);
        curveVertex(agents[2].position.x, agents[2].position.y);
    }
    endShape();
}

function keyTyped() {
    if (key === 's') {
        saveCanvas(getTimestamp(), 'jpg'); // Enregistrement du canvas au format JPG
    }
    if (key === 'f') {
        var isFullScreen = fullscreen();
        fullscreen(!isFullScreen); // Alternance entre mode fenêtre et mode plein écran
    }
}