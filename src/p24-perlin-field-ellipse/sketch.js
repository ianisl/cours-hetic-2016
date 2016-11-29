// Paramètres
var fieldIntensity = 20;
var fieldScale = 300;
var agentCount = 200;
var agentSize = 50;
var agentAlpha = 40;
/////////////

var field;
var agents;

function setup() {
    createCanvas(540, 540);
    field = createPerlinField(fieldIntensity, fieldScale);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, agentAlpha);
        strokeWeight(1);
        noFill();
        ellipse(a.position.x, a.position.y, agentSize, agentSize); // Représentation des agents par des cercles
    });
}

function initGUI() {
    var gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200);
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(this, 'agentAlpha', 1, 255);
    gui.add(this, 'agentSize', 0.5, 50);
    gui.add(this, 'refreshBackground');
}

function refreshBackground() {
    background(255);
}