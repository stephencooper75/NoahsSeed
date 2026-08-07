class GardenSystem {

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

            data => this.update(data)

        );

    }

    update(data) {

        this.tick++;

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        for (const plant of plants) {

            //----------------------------------
            // Plants slowly dry out
            //----------------------------------

            if (plant.state.water > 0) {

                plant.state.water--;

            }

            //----------------------------------
            // Plants grow when watered
            //----------------------------------

            if (plant.state.water > 20) {

                plant.state.growth += 2;

            }

            //----------------------------------
            // Determine stage
            //----------------------------------

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

            //----------------------------------
            // Stage changed?
            //----------------------------------

            if (
                stage !== plant.state.stage
            ) {

                plant.state.stage =
                    stage;

                this.eventBus.publish(

                    "plant_stage_changed",

                    {

                        id: plant.id,

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

}