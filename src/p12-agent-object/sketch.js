// Paramètres
var agentSize = 2;
var stepSize = 10;
var timeIntervalBetweenUpdates = 100;
// ----------

var agent;
var timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agent = createAgent(createVector(width/2, height/2)); // Création d'un agent
    agent.stepSize = stepSize; // Les propriétés de l'agent peuvent facilement être modifiées après sa création
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    var currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agent.angle = random(0, TWO_PI); // Pour des raisons de flexibilité, l'angle de l'agent doit être modifié manuellement avant d'appeler la méthode 'updatePosition'
    }
    agent.updatePosition();
    // Dessin
    background(255, 255, 255, 3);
    stroke(0);
    strokeWeight(agentSize);
    noFill();
    line(agent.previousPosition.x, agent.previousPosition.y, agent.position.x, agent.position.y);
}