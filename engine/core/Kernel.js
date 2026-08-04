/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Kernel
 */

class Kernel {

    constructor(
        bootstrap
    ) {

        this.bootstrap =
            bootstrap;

        this.running = false;

    }

    initialise() {

        console.log(
            "Kernel Initialised"
        );

    }

    start() {

        this.running = true;

        console.log(
            "Kernel Started"
        );

    }

    update(
        deltaTime
    ) {

        if (
            !this.running
        ) {

            return;

        }

        const services =
            this.bootstrap.getServices();

        for (
            const service of services
        ) {

            if (
                typeof service.update ===
                "function"
            ) {

                service.update(
                    deltaTime
                );

            }

        }

    }

    shutdown() {

        this.running =
            false;

        console.log(
            "Kernel Shutdown"
        );

    }

}

window.Kernel =
    Kernel;