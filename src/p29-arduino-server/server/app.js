// Serveur permettant d'afficher la position d'un agent à l'aide d'une LED

// Paramètres
var webPort = 8080; // Port utilisé pour la communication avec le navigateur
/////////////

var server = require('http').createServer(),
    io = require('socket.io')(server),
    five = require("johnny-five");

var board = new five.Board({'repl': false}); // Initialisation de la connexion avec la carte Arduino (avec désactivation du REPL fourni par Johnny Five)
board.on('ready', function() {
    // Démarrage du serveur Web
    server.listen(webPort);
    io.on('connection', function(client) {
        console.log('Connected with browser');
        var led = new five.Led(13); // Création d'un objet représentant une LED (nous utilisons ici la LED intégrée de la carte Arduino)
        client.on('led', function(data) {
            data.on ? led.on() : led.off();
        });
        client.on('disconnect', function() {
            led.off();
        });
    });
});