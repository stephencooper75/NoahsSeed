class KeyboardController {

    constructor(musicEngine) {

        this.music = musicEngine;

    }

    bind() {

        const keys =

            document.querySelectorAll(

                ".whiteKey,.blackKey"

            );

        keys.forEach(

            key => {

                key.addEventListener(

                    "mousedown",

                    () => {

                        this.music.play(

                            key.dataset.note

                        );

                    }

                );

            }

        );

    }

}