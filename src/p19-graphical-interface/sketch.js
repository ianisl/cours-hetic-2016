// Paramètres
var agentCount = 5;
var agentAlpha = 15;
var minStepSize = 0.2;
var maxStepSize = 2;
var timeIntervalBetweenUpdates = 1000;
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
    initGUI();
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
        saveCanvas(getTimestamp(), 'jpg');
    }
    if (key === 'f') {
        var isFullScreen = fullscreen();
        fullscreen(!isFullScreen);
    }
}

function initGUI() {
    // Création de l'objet 'GUI'
    var gui = new dat.GUI();
    // Enregistrement des paramètres à contrôler
    gui.add(this, 'agentAlpha', 0, 255);
    gui.add(this, 'timeIntervalBetweenUpdates', 5, 5000);
}