class ActivitySystem {

    constructor(
        eventBus,
        entitySystem
    ) {

        this.eventBus =
            eventBus;

        this.entitySystem =
            entitySystem;

    }

    start(activity) {

        console.log(
            "Activity started:",
            activity.id
        );

        this.eventBus.publish(
            "activity_started",
            activity.getData()
        );

    }

    complete(activity) {

        console.log(
            "Activity completed:",
            activity.id
        );

        switch (activity.id) {

            case "plant_seed":

                this.plantSeed();

                break;

            case "water_plants":

                this.waterPlants();

                break;

        }

        this.eventBus.publish(
            "activity_completed",
            activity.getData()
        );

        // NEW
        // Tell the UI to redraw itself.

        this.eventBus.publish(
            "garden_updated"
        );

    }

    plantSeed() {

        this.entitySystem.create({

            id:
                "apple_tree_" +
                Date.now(),

            type:
                "plants",

            name:
                "Apple Tree",

            location:
                "garden",

            state: {

                growth: 0,

                water: 20,

                health: 100,

                stage: "seed"

            }

        });

    }

    waterPlants() {

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        for (const plant of plants) {

            plant.updateState({

                water:
                    Math.min(

                        plant.state.water + 25,

                        100

                    )

            });

            this.entitySystem.update(

                plant.id,

                plant.state

            );

            break;

        }

    }

}