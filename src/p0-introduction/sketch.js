function setup() {
    createCanvas(540, 540); // Optionnel, permet de préciser la taille de la zone de dessin
}

function draw() {
    // Rectangle
    fill('#FF0000'); // Couleur de remplissage (notation hexadécimale)
    stroke('rgb(0, 0, 0)'); // Couleur de contour (notation RGB 0-255)
    rect(0, 0, 100, 120); // Dessin d'un rectangle
    // Rectangle
    fill(0, 200, 0); // Autre notation RGB 0-255
    noStroke(); // Désactivation du contour
    rect(140, 200, 20, 30);
    // Rectangle
    stroke('rgba(100, 0, 200, 0.5)'); // Contour avec transparence
    strokeWeight(5); // Épaisseur du contour (défaut : 1 px)
    noFill(); // Désactivation du remplissage
    rect(150, 210, 40, 40);
    // Ellipse
    stroke(100); // Couleur donnée en niveaux de gris
    ellipse(width/2, height/4, 50, 100); // La taille du canvas est accessible à tout moment par les variables 'width' et 'height' (note : l'effet de la fonction 'noFill' appelée à la ligne 17 continue)
    // Ellipse
    var c1 = color(150, 150, 150); // Objet 'color' de p5.js
    stroke(c1);
    ellipse(width/2, 3*height/4, 100, 100); // La fonction 'ellipse' est surtout utilisée pour tracer des cercles…
    // Ligne
    var l = brightness(c1); // Récupération de la luminosité (paramètre du mode HSB) de la couleur RGB(150, 150, 150)
    colorMode(HSB); // Les couleurs seront maintenant créées en mode HSB
    var c2 = color(200, 50, l); // c2 a la même luminosité que c1 mais des valeurs différentes de teinte et de saturation
    colorMode(RGB); // Ne pas oublier de repasser en mode RGB après création de la couleur
    stroke(c2);
    strokeWeight(1);
    line(200, 350, 400, 500);
}