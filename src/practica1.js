/**
 * MemoryGame es la clase que representa nuestro juego. Contiene un array con la cartas del juego,
 * el número de cartas encontradas (para saber cuándo hemos terminado el juego) y un texto con el mensaje
 * que indica en qué estado se encuentra el juego
 */
var MemoryGame = MemoryGame || {};

/**
 * Constructora de MemoryGame
 */
MemoryGame = function(gs) {
    this.maps = gs.maps;
    this.cards = new Array();
    var i = 0;
    for (var card in gs.maps) {
        if (card != "back") {
            this.cards.push({
                id: card,
                pos: i
            });
            i++;
            this.cards.push({
                id: card,
                pos: i
            });
        }
    }

    this.infoText = "MemoryGame";
    this.numCardsFound = 0;
    this.gs = gs;

    //   console.log(this);
};

MemoryGame.prototype = {

    // Inicializa el juego creando las cartas (2 de cada tipo), desordenándolas y comenzando
    // el bucle del juego.
    initGame: function() {
        //alert("jugamos");        
        this.cards = shuffleArray(this.cards);
        console.log(this);
    },
    // Dibuja el juego
    draw: function() {
        // Escribir mensaje con el estado del juego

        // Pedir a cada carta del tablero que se dibujen
    },
    // El bucle del juego.
    loop: function() {
        var self = this;
        // Llamar al método draw cada 16 ms
        setInterval(function() {
            self.draw()
        }, 16);
    },
    // Se llama cada vez que se pulsa sobre una carta (identificada por la posición que ocupan
    //	en el array). Voltea la carta, y si hay dos voleteadas, comprobar si son la misma.
    onClick: function(cardId) {

    }
};


/**
 * Constructora de las cartas del juego. Recibe como parámetro el nombre del sprite que representa la carta.
 * Dos cartas serán iguales si tienen el mismo sprite.
 * La carta puede guardar la posición que ocupa dentro del tablero para luego poder dibujarse
 * @param {string} id Nombre del sprite que representa la carta
 */
MemoryGame.Card = function(id) {

};

MemoryGame.Card.prototype = {
    // Da la vuelta a la carta, cambiando su estado
    flip: function() {

    },
    // Marca una carta como encontrada
    found: function() {

    },
    // Compara dos cartas
    compareTo: function(otherCard) {
        return (this.id === otherCard.id);
    },
    // Dibuja la carta de acuerdo al estado en el que se encuentra la carta
    draw: function(gs, pos) {

    }
};

/* Funciones auxiliares */

/**
 * Fuente: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}