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

}