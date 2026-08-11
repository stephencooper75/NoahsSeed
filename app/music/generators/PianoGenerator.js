class PianoGenerator {

    play(

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

        oscillator.frequency.value =

            frequency;

        oscillator.connect(gain);

        gain.connect(

            context.destination

        );

        gain.gain.setValueAtTime(

            0,

            context.currentTime

        );

        gain.gain.linearRampToValueAtTime(

            profile.volume,

            context.currentTime +

            profile.attack

        );

        gain.gain.exponentialRampToValueAtTime(

            0.0001,

            context.currentTime +

            profile.release

        );

        oscillator.start();

        oscillator.stop(

            context.currentTime +

            profile.release

        );

    }

}