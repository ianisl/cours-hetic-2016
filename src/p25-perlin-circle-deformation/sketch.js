// Paramètres
var fieldIntensity = 10;
var fieldScale = 30;
var agentCount = 500;
var circleRadius = 150; // Rayon du cercle à déformer
var circleAlpha = 20;
var circleLineWeight = 1.5;
/////////////

var field;
var agents;

function setup() {
    createCanvas(540, 540);
    field = createPerlinField(fieldIntensity, fieldScale);
    var angleStep = TWO_PI / agentCount; // Calcul de l'écart angulaire entre deux positions initiales d'agents
    agents = [];
    var a, x, y;
    for (var i = agentCount - 1; i >= 0; i--) {
        x = width / 2 + cos(i * angleStep) * circleRadius;
        y = height / 2 + sin(i * angleStep) * circleRadius;
        a = createAgent(createVector(x, y)); // Placement de départ des agents sur un cercle
        a.isPositionResetWhenOutside = false; // Les agents ne sont pas ramenés dans l'espace du sketch lorsqu'ils en sortent
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    beginShape();
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, circleAlpha);
        strokeWeight(circleLineWeight);
        noFill();
        curveVertex(a.position.x, a.position.y);
    });
    if (agents.length > 3)
    {
        curveVertex(agents[0].position.x, agents[0].position.y);
        curveVertex(agents[1].position.x, agents[1].position.y);
        curveVertex(agents[2].position.x, agents[2].position.y);
    }
    endShape();
}

function initGUI() {
    var gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200);
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(this, 'circleAlpha', 1, 255);
    gui.add(this, 'circleLineWeight', 0.5, 50);
}