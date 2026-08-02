class GameContext {

    constructor() {

        this.engine = null;

        this.worldState = null;

        this.player = null;

        this.eventBus = null;

        this.renderer = null;

        this.systems = {};

    }



    registerSystem(name, system) {

        this.systems[name] = system;

    }



    getSystem(name) {

        return this.systems[name];

    }

}