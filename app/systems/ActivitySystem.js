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

                this.waterPlant();

                break;

        }

        this.eventBus.publish(

            "activity_completed",

            activity.getData()

        );

    }

    plantSeed() {

        const treeId =
            "apple_tree_" +
            Date.now();

        this.entitySystem.create({

            id: treeId,

            type: "plants",

            name: "Apple Tree",

            location: "garden",

            state: {

                growth: 0,

                water: 20,

                health: 100,

                stage: "seed",

                discovered: false,

                companionShown: false

            }

        });

        this.eventBus.publish(

            "seed_planted",

            {

                id: treeId

            }

        );

    }

    waterPlant() {

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        if (
            plants.length === 0
        ) {

            return;

        }

        const plant =
            plants[0];

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

        this.eventBus.publish(

            "plant_watered",

            {

                id: plant.id

            }

        );

    }

}