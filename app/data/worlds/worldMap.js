const WORLD_MAP = {

    home: {

        id: "home",

        name: "Home",

        connections: [

            "garden",
            "bedroom",
            "library"

        ]

    },



    garden: {

        id: "garden",

        name: "Garden",

        connections: [

            "home"

        ]

    },



    bedroom: {

        id: "bedroom",

        name: "Bedroom",

        connections: [

            "home"

        ]

    },



    library: {

        id: "library",

        name: "Library",

        connections: [

            "home"

        ]

    }

};