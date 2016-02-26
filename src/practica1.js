/**
 * MemoryGame es la clase que representa nuestro juego. Contiene un array con la cartas del juego,
 * el número de cartas encontradas (para saber cuándo hemos terminado el juego) y un texto con el mensaje
 * que indica en qué estado se encuentra el juego
 *
 * @author: Álvar David Soler Rus
 */
var MemoryGame = MemoryGame || {};

/**
 * Constructora de MemoryGame
 */
MemoryGame = function(gs) {
    this.maps = gs.maps;
    this.cards = [];
    this.flippedCards = [];
    for (var card in gs.maps) {
        if (card != "back") {
            this.cards.push(new MemoryGame.Card(card));
            this.cards.push(new MemoryGame.Card(card));
        }
    }

    this.infoText = "Memory Game";
    this.numCardsFound = 0;
    this.gs = gs;
    this.wait = false;

    //   console.log(this);
};

MemoryGame.prototype = {

    // Inicializa el juego creando las cartas (2 de cada tipo), desordenándolas y comenzando
    // el bucle del juego.
    initGame: function() {
        //alert("jugamos");        
        this.cards = shuffleArray(this.cards);
        //console.log(this);
        this.loop();
    },
    // Dibuja el juego
    draw: function() {
        // Escribir mensaje con el estado del juego
        this.gs.drawMessage(this.infoText);
        // Pedir a cada carta del tablero que se dibujen
        for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].draw(this.gs, i);
        }
    },
    // El bucle del juego.
    loop: function() {

        var self = this;
        // Llamar al método draw cada 16 ms
        setInterval(function() {
            self.draw();
            if (self.numCardsFound === (self.cards.length / 2)) {
                self.infoText = "You Win!";
            }
        }, 16);

    },
    // Se llama cada vez que se pulsa sobre una carta (identificada por la posición que ocupan
    //	en el array). Voltea la carta, y si hay dos voleteadas, comprobar si son la misma.
    onClick: function(cardId) {
        if (this.wait) return;
        if (this.cards[cardId].state === "back") {
            this.cards[cardId].flip();
            this.flippedCards.push(this.cards[cardId]);
        }
        if (this.flippedCards.length == 2) {
            if (this.flippedCards[0].compareTo(this.flippedCards[1])) {
                // Las cartas son iguales, las marcamos como encontradas y aumentamos
                // el número de cartas encontradas
                this.flippedCards[0].found();
                this.flippedCards[1].found();

                this.numCardsFound++;
                this.infoText = "Match found!";
                // Dejamos el array con tamaño 0
                this.flippedCards = [];
            } else {
                // Son diferentes, las volteamos
                var self = this;
                this.wait = true;
                self.infoText = "Try again!";
                setTimeout(function() {
                    self.flippedCards[0].flip();
                    self.flippedCards[1].flip();
                    // Dejamos el array con tamaño 0
                    self.flippedCards = [];
                    self.wait = false;

                }, 1000);

            }

        }

    }
};


/**
 * Constructora de las cartas del juego. Recibe como parámetro el nombre del sprite que representa la carta.
 * Dos cartas serán iguales si tienen el mismo sprite.
 * La carta puede guardar la posición que ocupa dentro del tablero para luego poder dibujarse
 * @param {string} id Nombre del sprite que representa la carta
 */
MemoryGame.Card = function(id) {
    this.id = id;
    this.state = "back";
    this.found = false;
    this.flip = function() {
        if (this.state === "back") {
            this.state = "face";
        } else {
            this.state = "back";
        }
    };
    this.found = function() {
        this.found = true;
    };
    this.compareTo = function(otherCard) {
        return (this.id === otherCard.id);
    };
    this.draw = function(gs, pos) {
        if (this.state === "back") {
            gs.draw("back", pos);
        } else
            gs.draw(this.id, pos);
    };
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