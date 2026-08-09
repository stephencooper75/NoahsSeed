class DiscoverySystem {

    constructor(eventBus, journalSystem) {

        this.eventBus = eventBus;

        this.journalSystem = journalSystem;

        this.register();

    }

    register() {

        this.eventBus.subscribe(

            "plant_stage_changed",

            data => {

                if (data.stage !== "sprout") {

                    return;

                }

                const discovery =
                    DISCOVERIES.firstSprout;

                document
                    .getElementById("message")
                    .innerHTML = `

<h2>${discovery.title}</h2>

<p>${discovery.noah}</p>

<hr>

<p>${discovery.companion}</p>

`;

                if (

                    !this.journalSystem.has(

                        discovery.journalTitle

                    )

                ) {

                    this.journalSystem.add(

                        discovery.journalTitle,

                        discovery.journalText

                    );

                }

            }

        );

    }

}