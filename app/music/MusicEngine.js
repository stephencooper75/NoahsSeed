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

        console.log(
            "Instrument:",
            id
        );

    }


    play(note) {

        const frequencies = {

            C3: 130.81,
            "C#3": 138.59,
            D3: 146.83,
            "D#3": 155.56,
            E3: 164.81,

            F3: 174.61,
            "F#3": 185.00,
            G3: 196.00,
            "G#3": 207.65,
            A3: 220.00,
            "A#3": 233.08,
            B3: 246.94,

            C4: 261.63,
            "C#4": 277.18,
            D4: 293.66,
            "D#4": 311.13,
            E4: 329.63,

            F4: 349.23,
            "F#4": 369.99,
            G4: 392.00,
            "G#4": 415.30,
            A4: 440.00,
            "A#4": 466.16,
            B4: 493.88,

            C5: 523.25,
            "C#5": 554.37,
            D5: 587.33,
            "D#5": 622.25,
            E5: 659.25,

            F5: 698.46,
            "F#5": 739.99,
            G5: 783.99,
            "G#5": 830.61,
            A5: 880.00,
            "A#5": 932.33,
            B5: 987.77,

            C6: 1046.50

        };


        const profile =
            INSTRUMENT_PROFILES[
                this.instrument
            ];


        if (!profile) {

            return;

        }


        const frequency =
            frequencies[note];


        if (!frequency) {

            return;

        }


        const context =
            this.getContext();


        if (profile.synthesis === "pluck") {

            this.playPluck(
                context,
                frequency,
                profile
            );

            return;

        }

                if (profile.synthesis === "fart") {

            this.playFart(
                context,
                frequency,
                profile
            );

            return;

        }

                if (profile.synthesis === "sustain") {

            this.playSustain(
                context,
                frequency,
                profile
            );

            return;

        }


        this.playAdditive(
            context,
            frequency,
            profile
        );

    }


    playAdditive(
        context,
        frequency,
        profile
    ) {

        const harmonics =
            profile.harmonics || [

                {
                    type:
                        profile.waveform,

                    ratio: 1,

                    volume: 1

                }

            ];


        const harmonicTotal =
            harmonics.reduce(

                (total, harmonic) =>

                    total + harmonic.volume,

                0

            );


        const harmonicScale =
            harmonicTotal > 0

                ? 1 / harmonicTotal

                : 1;


        const masterGain =
            context.createGain();


        masterGain.gain.setValueAtTime(

            0,

            context.currentTime

        );


        masterGain.gain.linearRampToValueAtTime(

            profile.volume * 1.6,

            context.currentTime +
            profile.attack

        );


        masterGain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime +
            profile.release

        );


        masterGain.connect(

            context.destination

        );


        harmonics.forEach(

            harmonic => {

                const oscillator =
                    context.createOscillator();

                const gain =
                    context.createGain();


                oscillator.type =
                    harmonic.type ||
                    profile.waveform;


                oscillator.frequency.value =

                    frequency *
                    harmonic.ratio;


                gain.gain.value =

                    harmonic.volume *
                    harmonicScale;


                oscillator.connect(gain);

                gain.connect(masterGain);


                oscillator.start();


                oscillator.stop(

                    context.currentTime +
                    profile.release

                );

            }

        );

    }


            playPluck(
        context,
        frequency,
        profile
    ) {

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();


        oscillator.type =
            profile.waveform;


        oscillator.frequency.setValueAtTime(

            frequency,

            context.currentTime

        );


        oscillator.frequency.exponentialRampToValueAtTime(

            frequency * 0.995,

            context.currentTime +
            0.08

        );


        gain.gain.setValueAtTime(

            profile.volume * 1.6,

            context.currentTime

        );


        gain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime +
            profile.release

        );


        oscillator.connect(gain);

        gain.connect(

            context.destination

        );


        oscillator.start();


        oscillator.stop(

            context.currentTime +
            profile.release

        );

    }

    playFart(
        context,
        frequency,
        profile
    ) {

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();


        oscillator.type =
            "sawtooth";


        oscillator.frequency.setValueAtTime(

            frequency * 0.80,

            context.currentTime

        );


        oscillator.frequency.exponentialRampToValueAtTime(

            frequency * 0.35,

            context.currentTime +
            0.25

        );


        gain.gain.setValueAtTime(

            0.0001,

            context.currentTime

        );


        gain.gain.exponentialRampToValueAtTime(

            profile.volume,

            context.currentTime +
            profile.attack

        );


        gain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime +
            profile.release

        );


        oscillator.connect(gain);

        gain.connect(

            context.destination

        );


        oscillator.start();


        oscillator.stop(

            context.currentTime +
            profile.release

        );

    }

    playSustain(
        context,
        frequency,
        profile
    ) {

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();


        oscillator.type =
            profile.waveform;


        oscillator.frequency.setValueAtTime(

            frequency,

            context.currentTime

        );


        gain.gain.setValueAtTime(

            0.0001,

            context.currentTime

        );


        gain.gain.exponentialRampToValueAtTime(

            profile.volume,

            context.currentTime +
            profile.attack

        );


        gain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime +
            profile.release

        );


        oscillator.connect(gain);

        gain.connect(

            context.destination

        );


        oscillator.start();


        oscillator.stop(

            context.currentTime +
            profile.release

        );

    }

}