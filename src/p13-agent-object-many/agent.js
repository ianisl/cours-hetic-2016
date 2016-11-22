// Un fonction 'usine' fabriquant un agent. Les options d'initialisation
// sont volontairement restreintes au maximum : la fonction ne prend
// qu'un argument (optionnel), permettant de spécifier la position
// de l'agent lors de sa création.
//
// La philosophie derrière ce choix est qu'il est très facile,
// si le besoin s'en fait sentir, de modifier 'manuellement' les
// propriétés de l'objet après sa création. L'option de créer directement
// l'agent à la position souhaitée est en revanche fournie car l'édition
// manuelle de la propriété 'position' présente des risques : on pourrait
// oublier de mettre à jour la copie 'previousPosition'.

function createAgent(position) {

    // Création du nouvel objet 'Agent'
    var a = {};

    // Initialisation
    a.position = typeof position !== 'undefined' ? position : createVector(random(width), random(height)); // Si aucune position n'est fournie, initialisation avec une position aléatoire
    a.previousPosition = a.position.copy();
    a.angle = random(TWO_PI);
    a.stepSize = 1;
    a.isPositionResetWhenOutside = true;

    // Une méthode mettant à jour de la position de l'agent en fonction de son angle actuel
    a.updatePosition = function() {
        a.previousPosition = a.position.copy();
        a.position.x += cos(a.angle) * a.stepSize;
        a.position.y += sin(a.angle) * a.stepSize;
        if (a.isPositionResetWhenOutside && a.isOutsideSketch() > 0) {
            a.position = createVector(random(width), random(height));
            a.previousPosition = a.position.copy();
        }
    };

    // Une méthode permettant de vérifier si l'agent est sorti des limites de l'espace du sketch (+ marges)
    // La méthode renvoie les valeurs suivantes :
    // 0: l'agent n'est pas sorti des limites de l'espace du sketch
    // 1: l'agent est sorti par le haut
    // 2: l'agent est sorti par la droite
    // 3: l'agent est sorti par le bas
    // 4: l'agent est sorti par la gauche
    a.isOutsideSketch = function() {
        if (a.position.y < 0) {
            return 1;
        } else if (a.position.x > width) {
            return 2;
        } else if (a.position.y > height) {
            return 3;
        } else if (a.position.x < 0) {
            return 4;
        } else {
            return 0;
        }
    };

    // Retour de l'objet 'Agent'
    return a;

}