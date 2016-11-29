// Paramètres
var fieldIntensity = 10;
var fieldScale = 30;
var agentCount = 500;
var circleRadius = 150;
var circleAlpha = 20;
var circleLineWeight = 1.5;
var circleHue = 220;
var circleSaturation = 65;
var circleBrightness = 0;
var saturationStep = -0.1;
var brightnessStep = 0.2; // Vitesse des variations de luminosité au cours du temps
/////////////

var field;
var agents;
var fader;

function setup() {
    createCanvas(540, 540);
    field = createPerlinField(fieldIntensity, fieldScale);
    var angleStep = TWO_PI / agentCount;
    agents = [];
    var a, x, y;
    for (var i = agentCount - 1; i >= 0; i--) {
        x = width / 2 + cos(i * angleStep) * circleRadius;
        y = height / 2 + sin(i * angleStep) * circleRadius;
        a = createAgent(createVector(x, y)); // Placement de départ des agents sur un cercle
        a.isPositionResetWhenOutside = false; // Les agents ne sont pas ramenés dans l'espace du sketch lorsqu'ils en sortent
        agents.push(a);
    };
    fader = createColorFader(circleHue, circleSaturation, circleBrightness, 0, saturationStep, brightnessStep);
    initGUI();
    background(255);
    colorMode(HSB, 360, 100, 100, 255); // On peut à présent travailler uniquement en mode HSB car on ne rafraîchit pas le fond à chaque étape de la boucle draw (la gestion de la transparence du fond serait problématique en mode HSB)
}

function draw() {
    beginShape();
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(fader.x, fader.y, fader.z, circleAlpha);
        strokeWeight(circleLineWeight);
        noFill();
        curveVertex(a.position.x, a.position.y);
    });
    if (agents.length > 3) {
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