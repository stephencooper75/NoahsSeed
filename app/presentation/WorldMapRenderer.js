class WorldMapRenderer {

    render() {

        let html = `

<div class="worldMap">

<h2>

🌍 Noah's World

</h2>

<p class="worldSubtitle">

Where would you like to go today?

</p>

<div class="worldGrid">

`;

        // ============================
        // Scenery
        // ============================

        for (const item of WORLD_MAP.scenery) {

            html += `

<div
    class="scenery"
    style="left:${item.x}px;top:${item.y}px;">

${item.icon}

</div>

`;

        }

        // ============================
        // Paths
        // ============================

        for (const path of WORLD_MAP.paths) {

            html += `

<div
    class="path"
    style="
left:${path.x}px;
top:${path.y}px;
width:${path.width}px;">

</div>

`;

        }

        // ============================
        // Locations
        // ============================

        for (const id in WORLD_MAP.locations) {

            const location =
                WORLD_MAP.locations[id];

            html += `

<div
    class="mapNode"
    style="
left:${location.x}px;
top:${location.y}px;">

${location.icon}

<div class="mapLabel">

${location.name}

</div>

</div>

`;

        }

        // ============================
        // Player
        // ============================

        html += `

<div class="playerMarker">

🙂

</div>

</div>

</div>

`;

        return html;

    }

}