// Paramètres
var agentSize = 20;
var stepSize = 10;
var timeIntervalBetweenUpdates = 50;
var agentColorHue = 220; // La couleur dominante est spécifiée à l'aide de la teinte du mode de couleur HSB
// ----------

var agentPosition;
var agentPreviousPosition;
var agentAngle;
var timeOfLastUpdate;
var agentColor; // Les autres paramètres de couleur seront mis à jour aléatoirement

function setup() {
    createCanvas(540, 540);
    initPositionAndColor();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    var currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI);
    }
    updatePosition();
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPositionAndColor();
    }
    // Dessin
    background(255, 255, 255, 1);
    stroke(agentColor);
    strokeWeight(agentSize);
    noFill();
    line(agentPreviousPosition.x, agentPreviousPosition.y, agentPosition.x, agentPosition.y);
}

function initPositionAndColor() {
    agentPosition = createVector(random(width), random(height));
    agentPreviousPosition = agentPosition.copy();
    colorMode(HSB, 360, 100, 100); // Pour mettre à jour la couleur aléatoirement en conservant la teinte 'agentColorHue' définie dans les paramètres, on crée la nouvelle couleur de l'agent dans l'espace HSB. Les paramètres additionnels étalonnent la plage maximale des valeurs de teinte, saturation et luminosité. Les valeurs '360, 100, 100' correspondent à l'espace HSB tel qu'il est défini dans Photoshop.
    var c = color(agentColorHue, random(100), random(100)); // Création de la nouvelle couleur en mode HSB
    var r = red(c); // Récupération des composantes RGB de la couleur
    var g = green(c);
    var b = blue(c);
    colorMode(RGB); // Retour en mode RGB
    agentColor = color(r, g, b); // Mise à jour de la couleur de l'agent en mode RGB
}

function updatePosition() {
    agentPreviousPosition = agentPosition.copy();
    agentPosition.x += cos(agentAngle) * stepSize;
    agentPosition.y += sin(agentAngle) * stepSize;
}