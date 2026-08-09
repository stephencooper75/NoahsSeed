class GameScreenController {

    constructor() {

        this.locationInfo =
            document.getElementById(
                "locationInfo"
            );

        this.message =
            document.getElementById(
                "message"
            );

        this.activities =
            document.getElementById(
                "generatedActivities"
            );

    }

    showLocation(location) {

        this.locationInfo.innerHTML = `

<h2>
${location.icon} ${location.name}
</h2>

<p>
${location.description}
</p>

`;

    }

    showMessage(html) {

        this.message.innerHTML = html;

    }

    clearActivities() {

        this.activities.innerHTML = "";

    }

    addActivityButton(button) {

        this.activities.appendChild(button);

    }

    showNoActivities() {

        this.activities.innerHTML = `

<p>

✨ More adventures coming soon!

</p>

`;

    }

    showLevelUp(level) {

        this.showMessage(`

<h2>🌟 Level Up!</h2>

<p>

Congratulations Noah!

</p>

<p>

You reached Nature Level ${level}.

</p>

`);

    }

    showPlantDiscovery() {

        this.showMessage(`

<h2>🌱 Something Changed</h2>

<p>

A tiny sprout has appeared!

</p>

<p>

Maybe someone would like to see it...

</p>

`);

    }

}