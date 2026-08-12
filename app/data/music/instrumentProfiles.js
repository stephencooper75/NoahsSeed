const INSTRUMENT_PROFILES = {

  piano: {

    synthesis: "additive",

    waveform: "sine",

        attack: 0.003,

        release: 1.40,

        volume: 0.50,

        harmonics: [

            {
                type: "sine",
                ratio: 1,
                volume: 1.00
            },

            {
                type: "sine",
                ratio: 2,
                volume: 0.45
            },

            {
                type: "sine",
                ratio: 3,
                volume: 0.22
            },

            {
                type: "sine",
                ratio: 4,
                volume: 0.10
            },

            {
                type: "sine",
                ratio: 5,
                volume: 0.05
            }

        ]

    },

    guitar: {

        synthesis: "pluck",

        waveform: "triangle",

        attack: 0.002,

        release: 0.75,

        volume: 0.50,

        harmonics: [

            {
                type: "triangle",
                ratio: 1,
                volume: 1.00
            },

            {
                type: "triangle",
                ratio: 2,
                volume: 0.28
            },

            {
                type: "sine",
                ratio: 3,
                volume: 0.16
            },

            {
                type: "sine",
                ratio: 4,
                volume: 0.08
            },

            {
                type: "sine",
                ratio: 5,
                volume: 0.04
            }

        ]

    },

    violin: {

        synthesis: "sustain",

        waveform: "sawtooth",

        attack: 0.12,

        release: 1.40,

        volume: 0.30,

        vibrato: 5,

        vibratoDepth: 0.015,

        harmonics: [

            {
                type: "sawtooth",
                ratio: 1,
                volume: 1.00
            },

            {
                type: "sine",
                ratio: 2,
                volume: 0.30
            },

            {
                type: "sine",
                ratio: 3,
                volume: 0.12
            }

        ]

    },

       drums: {

        synthesis: "drum",

        waveform: "square",

        attack: 0.001,

        release: 0.30,

        volume: 0.40

    },

    fart: {

        synthesis: "fart",

        waveform: "square",

        attack: 0.02,

        release: 0.45,

        volume: 0.40

    },

    noah: {

        waveform: "sine",

        attack: 0.01,

        release: 0.80,

        volume: 0.20

        }



};