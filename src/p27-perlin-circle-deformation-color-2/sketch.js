// Paramètres
var fieldIntensity = 10;
var fieldScale = 30;
var agentCount = 500;
var circleRadius = 150;
var circleAlpha = 20;
var circleLineWeight = 1.5;
var circleHue = 125;
var circleSaturation = 65;
var circleBrightness = 0;
var hueStep = 0.6;
var saturationStep = -0.1;
var brightnessStep = 0.2;
/////////////

var field;
var agents;
var fader;
var fader2;

function setup() {
    createCanvas(540, 540);
    field = createPerlinField(fieldIntensity, fieldScale);
    var angleStep = TWO_PI / agentCount;
    agents = [];
    var a, x, y;
    for (var i = agentCount - 1; i >= 0; i--) {
        x = width / 2 + cos(i * angleStep) * circleRadius;
        y = height / 2 + sin(i * angleStep) * circleRadius;
        a = createAgent(createVector(x, y));
        a.isPositionResetWhenOutside = false;
        agents.push(a);
    };
    fader = createColorFader(0, circleSaturation, circleBrightness, 0, saturationStep, brightnessStep);
    fader2 = createColorFader(circleHue, 0, 0, hueStep, 0, 0); // On utilise ici un second fader pour faire évoluer la teinte du cercle au cours du temps
    initGUI();
    background(255);
    colorMode(HSB, 360, 100, 100, 255);
}

function draw() {
    beginShape();
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(fader2.x, fader.y, fader.z, circleAlpha); // 'fader2' contrôle la teinte, 'fader' la saturation et la luminosité
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