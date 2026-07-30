class WorldState {

    constructor() {

        this.data = {

            metadata: {

                version: 1,

                created:
                    new Date().toISOString(),

                lastSaved:
                    null

            },


            player: {

                identity: {},

                preferences: {}

            },


            progression: {

                xp: 0,

                levels: {},

                achievements: []

            },


            world: {

                unlockedLocations: [],

                changes: {}

            },


            collections: {

                discoveries: [],

                collectibles: []

            },


            inventory: {

                items: []

            },


            economy: {

                currencies: {}

            },


            entities: {

                plants: [],

                pets: [],

                characters: []

            },


            environment: {

                weather: {},

                time: {},

                seasons: {}

            }

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



    updateLastSaved() {

        this.data.metadata.lastSaved =
            new Date().toISOString();

    }

}