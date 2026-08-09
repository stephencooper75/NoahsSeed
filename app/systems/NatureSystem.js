class NatureSystem {

    constructor(
        eventBus,
        entitySystem
    ) {

        this.eventBus =
            eventBus;

        this.entitySystem =
            entitySystem;

        this.tick = 0;

        this.eventBus.subscribe(

            "world_tick",

            () => this.update()

        );

    }

    update() {

        this.tick++;

        this.updatePlants();

        this.checkAmbientLife();

    }

    updatePlants() {

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        for (const plant of plants) {

            if (plant.state.water > 0) {

                plant.state.water--;

            }

            if (plant.state.water >= 25) {

                plant.state.growth++;

            }

            const oldStage =
                plant.state.stage;

            let stage =
                "seed";

            if (plant.state.growth >= 100)
                stage = "sprout";

            if (plant.state.growth >= 300)
                stage = "young";

            if (plant.state.growth >= 700)
                stage = "tree";

            if (plant.state.growth >= 950)
                stage = "fruit";

            if (stage !== oldStage) {

                plant.state.stage =
                    stage;

                this.eventBus.publish(

                    "plant_stage_changed",

                    {

                        plant,

                        stage

                    }

                );

            }

            this.entitySystem.update(

                plant.id,

                plant.state

            );

        }

    }

    checkAmbientLife() {

        if (
            this.tick % 30 !== 0
        ) {

            return;

        }

        if (
            typeof AMBIENT_EVENTS ===
            "undefined"
        ) {

            return;

        }

        const event =

            AMBIENT_EVENTS[

                Math.floor(

                    Math.random() *

                    AMBIENT_EVENTS.length

                )

            ];

        this.eventBus.publish(

            "ambient_event",

            event

        );

    }

}