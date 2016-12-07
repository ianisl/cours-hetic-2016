// Une fonction 'usine' fabriquant un champ de force basé sur la luminosité des pixels d'une image

function createImageField(fieldIntensity, image) {

    // Création du nouvel objet 'Image Field'
    var f = {};

    // Initialisation
    f.fieldIntensity = fieldIntensity;
    f.image = image;

    // Une méthode permettant d'obtenir la valeur du champ de force à une position donnée
    f.getFieldValue = function(position) {
        var c = f.image.get(floor(position.x/width * image.width), floor(position.y/height * image.height)); // Obtention de la couleur de l'image à une position donnée. L'image est automatiquement ajustée aux dimensions du canvas.
        return brightness(c) * f.fieldIntensity;
    };

    // Une méthode permettant d'appliquer un flou à l'image
    f.applyBlur = function(level) {
        f.image.filter(BLUR, level);
    }

    // Retour de l'object 'Image Field'
    return f;

}