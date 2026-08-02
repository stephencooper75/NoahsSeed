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



        if (
            activity.id === "plant_seed"
        ) {

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

                    water: 0,

                    health: 100

                }

            });

        }



        if (
            activity.id === "water_plants"
        ) {

            const plants =
                this.entitySystem.getByCategory(
                    "plants"
                );

            for (const plant of plants) {

                if (
                    plant.state.water < 100
                ) {

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



        this.eventBus.publish(

            "activity_completed",

            activity.getData()

        );

    }

}