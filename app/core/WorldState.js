class WorldState {

    constructor() {

        this.data = {

            version: 1,

            player: {},

            world: {},

            progression: {},

            inventory: {},

            rewards: {},

            economy: {},

            locations: {},

            entities: {}

        };

    }



    get(path) {

        return this.data[path];

    }



    set(path, value) {

        this.data[path] = value;

    }



    getState() {

        return this.data;

    }

}