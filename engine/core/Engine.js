/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Engine
 */

class Engine {

    constructor() {

        this.bootstrap =
            new EngineBootstrap();

        this.kernel =
            new Kernel(
                this.bootstrap
            );

    }

    registerService(
        id,
        service
    ) {

        this.bootstrap.registerService(
            id,
            service
        );

    }

    getService(
        id
    ) {

        return this.bootstrap.getService(
            id
        );

    }

    initialise() {

        this.bootstrap.start();

        this.kernel.initialise();

        this.kernel.start();

    }

    update(
        deltaTime
    ) {

        this.kernel.update(
            deltaTime
        );

    }

}

window.Engine =
    Engine;