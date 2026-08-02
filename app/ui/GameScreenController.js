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

                ${location.icon}

                ${location.name}

            </h2>

            <p>

                ${location.description}

            </p>

        `;

    }



    clearActivities() {

        this.activities.innerHTML = "";

    }



    addActivityButton(button) {

        this.activities.appendChild(button);

    }



    showMessage(html) {

        this.message.innerHTML = html;

    }

}