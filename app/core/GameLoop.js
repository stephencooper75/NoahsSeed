class GameLoop {

    constructor(
        simulationSystem,
        ticksPerSecond = 10
    ) {

        this.simulationSystem =
            simulationSystem;

        this.interval =
            1000 / ticksPerSecond;

        this.timer = null;

    }

    start() {

        if (
            this.timer
        ) {

            return;

        }

        console.log(
            "GameLoop started"
        );

        this.timer =
            setInterval(

                () => {

                    this.simulationSystem.update();

                },

                this.interval

            );

    }

    stop() {

        clearInterval(
            this.timer
        );

        this.timer = null;

    }

}