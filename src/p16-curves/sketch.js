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
        curveVertex(agents[0].position.x, agents[0].position.y); // Les premiers et derniers 'curveVertex' ajoutés à une courbe d'une courbe spline jouent le rôle de points de contrôle. Pour fermer la courbe, on doit donc ajouter à nouveau les trois premiers 'curveVertex'.
        curveVertex(agents[1].position.x, agents[1].position.y);
        curveVertex(agents[2].position.x, agents[2].position.y);
    }
    endShape();
}