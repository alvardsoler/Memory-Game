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
    this.infoText = "MemoryGame";
    this.numCardsFound = 0;
    this.gs = gs;

    console.log(this);
};

MemoryGame.prototype = {

    // Inicializa el juego creando las cartas (2 de cada tipo), desordenándolas y comenzando
    // el bucle del juego.
    initGame: function() {
        //alert("jugamos");
    },
    // Dibuja el juego
    draw: function() {
        // Escribir mensaje con el estado del juego

        // Pedir a cada carta del tablero que se dibujen
    },
    // El bucle del juego.
    loop: function() {
        // Llamar al método draw cada 16 ms
        setInterval(draw, 16);
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