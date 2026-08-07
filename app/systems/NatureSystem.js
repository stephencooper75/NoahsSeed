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

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        for (const plant of plants) {

            //------------------------------------
            // Dry out slowly
            //------------------------------------

            if (plant.state.water > 0) {

                plant.state.water--;

            }

            //------------------------------------
            // Grow only if watered
            //------------------------------------

            if (plant.state.water >= 25) {

                plant.state.growth++;

            }

            //------------------------------------
            // Stage progression
            //------------------------------------

            const oldStage =
                plant.state.stage;

            let newStage =
                "seed";

            if (plant.state.growth >= 100)
                newStage = "sprout";

            if (plant.state.growth >= 300)
                newStage = "young";

            if (plant.state.growth >= 700)
                newStage = "tree";

            if (plant.state.growth >= 950)
                newStage = "fruit";

            if (
                newStage !== oldStage
            ) {

                plant.state.stage =
                    newStage;

                this.eventBus.publish(

                    "plant_stage_changed",

                    {

                        plant,

                        stage: newStage

                    }

                );

            }

            this.entitySystem.update(

                plant.id,

                plant.state

            );

        }

    }

}