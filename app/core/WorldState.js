class WorldState {

    constructor() {


        this.data = {


            metadata: {

                version: 2,

                created:
                    new Date().toISOString(),

                lastSaved:
                    null,

                playTime: 0

            },



            world: {

                activeWorld:
                    "noahs_world",


                activeLocation:
                    null,


                activePlayerId:
                    null,


                unlockedLocations:
                    [],


                changes:
                    {},


                time: {

                    day: 1,

                    hour: 8,

                    minute: 0

                },


                weather: {

                    type:
                        "sunny"

                },


                season:
                    "spring"

            },



            entities: {


                registry: {},


                categories: {


                    plants: [],

                    pets: [],

                    characters: [],

                    items: [],

                    vehicles: [],

                    buildings: []

                }

            },



            progression: {


                xp: 0,


                level: 1,


                achievements: [],


                completedActivities: []

            },



            collections: {


                discoveries: [],


                collectibles: []

            },



            economy: {


                currencies: {}

            },



            settings: {


                language:
                    "en",


                difficulty:
                    "adaptive"


            },



            learnerProfiles: {


                registry: {}

            }



        };


    }





    get(path) {


        return this.data[path];


    }





    set(
        path,
        value
    ) {


        this.data[path] =
            value;


    }





    getState() {


        return this.data;


    }





    updateLastSaved() {


        this.data.metadata.lastSaved =
            new Date().toISOString();


    }


}