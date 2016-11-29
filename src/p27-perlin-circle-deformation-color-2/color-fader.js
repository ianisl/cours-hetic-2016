// Une fonction 'usine' fabriquant un variateur de couleurs. Le choix du mode de couleur est laissé libre à l'utilisateur. L'utilitaire se contente de faire évoluer trois composantes 'x', 'y' et 'z' à l'aide d'incréments 'xStep', 'yStep' et 'zStep'.

function createColorFader(x, y, z, xStep, yStep, zStep) {

    // Création du nouvel objet 'Color Fader'
    var f = {};

    // Initialisation
    f.x = x; // 'x' : 'red' ou 'hue'
    f.y = y; // 'y' : 'green' ou 'saturation'
    f.z = z; // 'x' : 'blue' ou 'brightness'
    f.xStep = xStep;
    f.yStep = yStep;
    f.zStep = zStep;

    // Une méthode permettant de mettre à jour les composantes de la couleur
    f.update = function() {
        f.x += f.xStep;
        f.y += f.yStep;
        f.z += f.zStep;
    };

    // Mise en place de l'appel automatique de 'f.update' au début de chaque boucle draw de notre sketch
    p5.prototype.registerMethod('pre', f.update);

    // Retour de l'objet 'Color Fader'
    return f;
}