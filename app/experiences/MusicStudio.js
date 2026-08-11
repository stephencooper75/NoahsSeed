class MusicStudio {

constructor() {

    this.selectedInstrument =

        "piano";

    this.keyboard =

        new KeyboardRenderer();

    this.music =

        new MusicEngine();


}

    renderToolbar() {

        let html = `

<div class="instrumentToolbar">

`;

        for (const id in INSTRUMENTS) {

            const instrument =
                INSTRUMENTS[id];

            const selected =

                instrument.id ===
                this.selectedInstrument

                ? " selected"

                : "";

            html += `

<button
class="instrumentButton${selected}"
data-instrument="${instrument.id}">

${instrument.icon}

${instrument.name}

</button>

`;

        }

        html += `

</div>

`;

        return html;

    }

    renderFooter() {

        return `

<br>

<button id="closeMusicStudio">

⬅ Return

</button>

`;

    }

    render() {

        return `

<div
class="musicStudio">

<h2>

🎵 Music Studio

</h2>

<p>

Choose an instrument.

</p>

${this.renderToolbar()}

${this.keyboard.render()}

${this.renderFooter()}

</div>

`;

    }

bindEvents() {

    this.bindClose();

    this.bindKeyboard();

    this.bindToolbar();

}

bindClose() {

    document
        .getElementById(
            "closeMusicStudio"
        )
        .addEventListener(

            "click",

            () => {

                document
                    .getElementById(
                        "experienceWindow"
                    )
                    .style.display =
                    "none";

            }

        );

}

bindKeyboard() {

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

bindToolbar() {

    const buttons =

        document.querySelectorAll(

            ".instrumentButton"

        );

    buttons.forEach(

        button => {

            button.addEventListener(

                "click",

                () => {

                    const instrument =

                        INSTRUMENTS[
                            button.dataset.instrument
                        ];

                    if (
                        instrument.playable === false
                    ) {

                        this.dialogue.show({

                            speaker: "Dad",

                            icon: "😊",

                            title: "⭐ Noah's Choice",

                            message: `

Hi Noah!

This instrument doesn't exist yet.

If you could invent ANY instrument
in the whole world...

🎵 What would it sound like?

Tell Dad your idea.

One day it could become part
of Noah's Seed!

`,

                            button: "🌱 OK"

                        });

                        return;

                    }

                    this.selectedInstrument =
                        instrument.id;

                    this.music.setInstrument(
                        instrument.id
                    );

                    this.refresh();

                }

            );

        }

    );

}

refresh() {

    const window =

        document.getElementById(

            "experienceWindow"

        );

    window.innerHTML =

        this.render();

    this.bindEvents();

}


}