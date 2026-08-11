class MusicEngine {

    constructor() {

        this.audioContext = null;

        this.instrument = "piano";

    }

    getContext() {

        if (!this.audioContext) {

            this.audioContext =
                new AudioContext();

        }

        return this.audioContext;

    }

    setInstrument(id) {

        this.instrument = id;

    }

    play(note) {

        const frequencies = {

            C3:130.81,
            "C#3":138.59,
            D3:146.83,
            "D#3":155.56,
            E3:164.81,

            F3:174.61,
            "F#3":185.00,
            G3:196.00,
            "G#3":207.65,
            A3:220.00,
            "A#3":233.08,
            B3:246.94,

            C4:261.63,
            "C#4":277.18,
            D4:293.66,
            "D#4":311.13,
            E4:329.63,

            F4:349.23,
            "F#4":369.99,
            G4:392.00,
            "G#4":415.30,
            A4:440.00,
            "A#4":466.16,
            B4:493.88,

            C5:523.25,
            "C#5":554.37,
            D5:587.33,
            "D#5":622.25,
            E5:659.25,

            F5:698.46,
            "F#5":739.99,
            G5:783.99,
            "G#5":830.61,
            A5:880.00,
            "A#5":932.33,
            B5:987.77,

            C6:1046.50

        };

        const waveforms = {

            piano: "sine",

            guitar: "triangle",

            violin: "sawtooth",

            drums: "square",

            noah: "sine"

        };

        const context =
            this.getContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();

        oscillator.type =
            waveforms[this.instrument];

        oscillator.frequency.value =
            frequencies[note];

        oscillator.connect(gain);

        gain.connect(
            context.destination
        );

        gain.gain.value = 0.20;

        oscillator.start();

        gain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime + 0.8

        );

        oscillator.stop(

            context.currentTime + 0.8

        );

    }

}