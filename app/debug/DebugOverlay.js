class DebugOverlay {

    constructor() {

        this.panel =
            document.getElementById(
                "debugOverlay"
            );

    }

    update(data) {

        if (!this.panel) {

            return;

        }

        this.panel.innerHTML = `

<b>Noah Engine</b>

<hr>

Tick:
${data.tick}

<hr>

Time:
${new Date().toLocaleTimeString()}

`;

    }

}