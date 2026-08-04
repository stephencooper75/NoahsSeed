/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Bootstrap
 */

class EngineBootstrap {

    constructor() {

        this.serviceRegistry =
            new ServiceRegistry();

    }

    registerService(
        id,
        service
    ) {

        this.serviceRegistry.register(
            id,
            service
        );

    }

    getService(id) {

        return this.serviceRegistry.get(
            id
        );

    }

    getServices() {

        return this.serviceRegistry.all();

    }

    start() {

        console.log(
            "🚀 Noah Engine Bootstrapped"
        );

        console.log(
            `Services Registered: ${this.serviceRegistry.count()}`
        );

    }

}

window.EngineBootstrap =
    EngineBootstrap;