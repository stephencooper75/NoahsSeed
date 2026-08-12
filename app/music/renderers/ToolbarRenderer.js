class ToolbarRenderer {

    render(selectedInstrument) {

        let html = `

<div class="instrumentToolbar">

`;

        for (const id in INSTRUMENTS) {

            const instrument =

                INSTRUMENTS[id];

            const selected =

                instrument.id ===
                selectedInstrument

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

}