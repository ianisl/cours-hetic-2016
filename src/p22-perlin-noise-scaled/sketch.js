// Paramètres
var noiseIntensity = 255;
var noiseScale = 300; // Ce paramètre permet de contrôler l'échelle du bruit de Perlin.
/////////////

function setup() {
    createCanvas(540, 540);
    drawPerlinValues();
    initGUI();
}

function drawPerlinValues() {
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var v = noise(i / noiseScale, j / noiseScale); // La division est préférée à la multiplication car elle donne des résultats plus intuitifs : plus 'noiseScale' aura une valeur élevée, et plus la taille des structures visuelles produites sera grande.
            stroke(v * noiseIntensity);
            point(i, j);
        }
    }
}

function initGUI() {
    var gui = new dat.GUI();
    gui.add(this, 'noiseIntensity', 0, 255).onChange(function(v) {
        drawPerlinValues();
    });
    gui.add(this, 'noiseScale', 1, 500).onChange(function(v) {
        drawPerlinValues();
    });
}