class CompanionSystem {

    constructor(
        eventBus,
        journalSystem = null
    ) {

        this.eventBus =
            eventBus;

        this.journalSystem =
            journalSystem;

        this.currentCompanion =
            COMPANIONS.dad;

        this.firstSproutSeen =
            false;

        this.registerEvents();

    }

    registerEvents() {

        this.eventBus.subscribe(

            "plant_stage_changed",

            data => {

                this.onPlantStageChanged(
                    data
                );

            }

        );

    }

    onPlantStageChanged(data) {

        if (
            data.stage !== "sprout"
        ) {

            return;

        }

        if (
            this.firstSproutSeen
        ) {

            this.speak(
                "sprout"
            );

            return;

        }

        this.firstSproutSeen =
            true;

        this.speak(
            "sprout"
        );

        if (
            this.journalSystem
        ) {

            this.journalSystem.add(

                "First Wonder",

                "Today we discovered our very first sprout together."

            );

        }

        this.eventBus.publish(

            "first_wonder"

        );

    }

    speak(group) {

        const phrases =
            this.currentCompanion
                .phrases[group];

        if (
            !phrases
        ) {

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
            .getElementById(
                "message"
            )
            .innerHTML = `

<h2>

😊 ${this.currentCompanion.name}

</h2>

<p>

${message}

</p>

`;

    }

}