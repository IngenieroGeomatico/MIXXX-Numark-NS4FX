// eslint-disable-next-line no-var
var NS4FX = {
    init: function() {},
    shutdown: function() {},
    controller: {
        options: {},
        topPanel: {
            option: {},
            decks: [{}],
        },
        sysex: {},
        Deck: function() {},
    },
    led: {
        init: function() {},
        shutdown: function() {}
    }
};


// Información del controlador
NS4FX.info = {
    name: "Numark NS4FX",
    author: "ingenieroGeomático",
    description: "Controlador MIDI para Mixxx",
    version: "1.0",
    type: "Controller"
};

// Inicialización
NS4FX.init = function() {
    // Configuración inicial del controlador
    console.log("Numark NS4FX inicializado");

    // Create Deck Components
    NS4FX.controller.topPanel.decks = new components.ComponentContainer();
    NS4FX.controller.topPanel.decks[1] = new NS4FX.controller.Deck(1, 0x00);
    NS4FX.controller.topPanel.decks[2] = new NS4FX.controller.Deck(2, 0x01);
    NS4FX.controller.topPanel.decks[3] = new NS4FX.controller.Deck(3, 0x02);
    NS4FX.controller.topPanel.decks[4] = new NS4FX.controller.Deck(4, 0x03);
};

// Shutdown - Limpieza
NS4FX.shutdown = function() {
    // Limpieza y reseteo
    console.log("Numark NS4FX apagado");
};
