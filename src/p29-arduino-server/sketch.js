// Paramètres
var agentSize = 1.5;
var webPort = 8080;
/////////////

var agent;
var socket;

function setup() {
    createCanvas(540, 540);
    agent = createAgent();
    socket = io.connect('http://localhost:' + webPort);
    background(255);
}

function draw() {
    background(255);
    agent.updatePosition();
    reportPosition();
    stroke(0);
    strokeWeight(agentSize);
    line(agent.previousPosition.x, agent.previousPosition.y, agent.position.x, agent.position.y);
}

function reportPosition() {
    if (agent.position.x > width / 2) {
        socket.emit('led', {'on': true});
    } else {
        socket.emit('led', {'on': false});
    }
}