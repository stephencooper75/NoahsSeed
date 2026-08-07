class CompanionSystem {

    constructor(eventBus) {

        this.eventBus = eventBus;

        this.currentCompanion =
            COMPANIONS.dad;

    }

    speak(group) {

        const phrases =
            this.currentCompanion.phrases[group];

        if (!phrases || phrases.length === 0) {

            return;

        }

        const message = phrases[0];

        document
            .getElementById("message")
            .innerHTML = `

                <h2>${this.currentCompanion.name}</h2>

                <p>${message}</p>

            `;

    }

}