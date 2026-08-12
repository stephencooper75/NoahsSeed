class InstrumentController {

    constructor(musicStudio) {

        this.musicStudio = musicStudio;

    }

    bind() {

        const buttons =

            document.querySelectorAll(

                ".instrumentButton"

            );

        buttons.forEach(

            button => {

                button.addEventListener(

                    "click",

                    () => {

                        this.select(

                            button.dataset.instrument

                        );

                    }

                );

            }

        );

    }

    select(id) {

        const instrument =

            INSTRUMENTS[id];

        if (

            instrument.playable === false

        ) {

            this.musicStudio.dialogue.show({

                speaker: "Dad",

                icon: "😊",

                title: "⭐ Noah's Choice",

                message: `

Hi Noah!

This instrument doesn't exist yet.

If you could invent ANY instrument
in the whole world...

🎵 What would it sound like?

I'd love to hear your idea.

One day it could become part
of Noah's Seed!

`,

                button: "🌱 OK"

            });

            return;

        }

        this.musicStudio.selectedInstrument =

            id;

        this.musicStudio.music.setInstrument(

            id

        );

        this.musicStudio.refresh();

    }

}