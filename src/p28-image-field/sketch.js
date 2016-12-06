// Paramètres
var fieldIntensity = 0.005;
var agentCount = 10;
var agentSize = 1.5;
var agentAlpha = 120;
var stepSize = 10;
/////////////

var image;
var agents;
var field;

function preload() {
    image = loadImage('img/x.jpg'); // En appelant la fonction asynchrone 'loadImage' dans la méthode 'preload', on garantit que la suite du sketch ne s'exécutera qu'une fois l'image chargée
}

function setup() {
    createCanvas(540, 540);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        a.stepSize = stepSize;
        agents.push(a);
    };
    field = createImageField(fieldIntensity, image);
    field.applyBlur(10);
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, agentAlpha);
        strokeWeight(agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}