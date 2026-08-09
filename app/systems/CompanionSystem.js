class CompanionSystem {

    constructor(eventBus) {

        this.eventBus =
            eventBus;

        this.currentCompanion =
            COMPANIONS.dad;

    }

    speak(group) {

        const phrases =
            this.currentCompanion.phrases[group];

        if (!phrases) {

            return;

        }

        const message =
            phrases[
                Math.floor(
                    Math.random() *
                    phrases.length
                )
            ];

        document
            .getElementById("message")
            .innerHTML = `

<h2>

${this.currentCompanion.name}

</h2>

<p>

${message}

</p>

`;

    }

}