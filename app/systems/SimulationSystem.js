class SimulationSystem {

    constructor(
        eventBus,
        worldClock
    ) {

        this.eventBus =
            eventBus;

        this.worldClock =
            worldClock;

        this.modules = [];

    }

    register(module) {

        this.modules.push(
            module
        );

    }

    update() {

        const tick =
            this.worldClock.tick();

        this.eventBus.publish(
            "world_tick",
            {
                tick
            }
        );

        for (
            const module
            of this.modules
        ) {

            if (
                module.update
            ) {

                module.update(
                    tick
                );

            }

        }

    }

}