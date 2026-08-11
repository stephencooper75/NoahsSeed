class MusicStudio {

    constructor() {

        this.notes = [

            "C3","D3","E3","F3","G3","A3","B3",

            "C4","D4","E4","F4","G4","A4","B4",

            "C5","D5","E5","F5","G5","A5","B5",

            "C6"

        ];

    }

    render() {

        let html = `

<div class="musicStudio">

<h2>

🎵 Music Studio

</h2>

<p>

Choose an instrument.

</p>

<div class="instrumentToolbar">

<button class="instrumentButton">

🎹 Piano

</button>

<button
class="instrumentButton"
disabled>

🎸 Guitar

<br>

<small>Coming Soon</small>

</button>

<button
class="instrumentButton"
disabled>

🥁 Drums

<br>

<small>Coming Soon</small>

</button>

</div>

<div class="keyboard">

`;

        for (const note of this.notes) {

            html += `

<div
class="whiteKey"
data-note="${note}">

<span>

${note}

</span>

</div>

`;

        }

        html += `

</div>

<br>

<button id="closeMusicStudio">

⬅ Return

</button>

</div>

`;

        return html;

    }

}