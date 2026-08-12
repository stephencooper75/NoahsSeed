const INSTRUMENTS = {

    piano: {

        id: "piano",

        name: "Piano",

        icon: "🎹",

        waveform: "sine",

        availability: "core",

        discoveryId: null

    },


    guitar: {

        id: "guitar",

        name: "Guitar",

        icon: "🎸",

        waveform: "triangle",

        availability: "core",

        discoveryId: null

    },


    violin: {

        id: "violin",

        name: "Violin",

        icon: "🎻",

        waveform: "sawtooth",

        availability: "core",

        discoveryId: null

    },


    drums: {

        id: "drums",

        name: "Drums",

        icon: "🥁",

        availability: "core",

        discoveryId: null

    },


    fart: {

        id: "fart",

        name: "Fartophone",

        icon: "💨",

        availability: "core",

        discoveryId: null

    },


    noah: {

        id: "noah",

        name: "Noah's Choice",

        icon: "⭐",

        availability: "core",

        discoveryId: null,

        playable: false

    }

};


function isInstrumentAvailable(

    instrument,

    discoverySystem

) {

    if (!instrument) {

        return false;

    }


    if (

        instrument.availability === "core"

    ) {

        return true;

    }


    if (

        instrument.availability === "discovery"

    ) {

        if (!instrument.discoveryId) {

            return false;

        }

        if (!discoverySystem) {

            return false;

        }

        return discoverySystem.has(

            instrument.discoveryId

        );

    }


    return false;

}