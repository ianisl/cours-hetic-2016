// Paramètres
var fieldIntensity = 10;
var fieldScale = 300;
var agentCount = 1000;
var agentSize = 1.5;
var agentAlpha = 90;
var stepSize = 10;
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
        a.stepSize = stepSize;
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position); // Utilisation de la valeur du champ à l'endroit où se trouve l'agent comme nouvelle valeur de l'angle.
        a.updatePosition();
        stroke(0, agentAlpha);
        strokeWeight(agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}

function initGUI() {
    var gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200); // On doit modifier les propriétés de l'objet 'field', et non les paramètres du sketch : ces derniers deviennent inutiles une fois l'objet initialisé.
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(this, 'agentAlpha', 1, 255);
    gui.add(this, 'agentSize', 0.5, 50);
    gui.add(this, 'stepSize', 1, 20).onChange(function(v) {
        agents.forEach(function(a) {
            a.stepSize = stepSize; // On utilise ici un listener pour surveiller l'action de l'utilisateur sur l'interface graphique. On transmets ensuite la nouvelle valeur du paramètre 'stepSize' à tous les agents.
        });
    });
    gui.add(this, 'refreshBackground');
}

function refreshBackground() {
    background(255);
}