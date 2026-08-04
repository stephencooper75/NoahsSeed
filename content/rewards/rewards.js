window.REWARDS = [

    {
        id: "first_seed",

        name: "First Seed Certificate",

        category: "gardening",

        rarity: "common",

        description:
            "Awarded for planting your first seed.",

        levels: [

            {
                level: 1,

                title:
                    "Seedling Gardener",

                appearance:
                    "bronze"

            }

        ]

    },


    {
        id: "garden_master",

        name: "Garden Master Badge",

        category: "gardening",

        rarity: "legendary",

        description:
            "A badge showing great gardening skill.",

        levels: [

            {
                level: 1,

                title:
                    "Garden Beginner",

                appearance:
                    "bronze"

            },

            {
                level: 10,

                title:
                    "Garden Helper",

                appearance:
                    "silver"

            },

            {
                level: 50,

                title:
                    "Garden Expert",

                appearance:
                    "gold"

            },

            {
                level: 100,

                title:
                    "Garden Master",

                appearance:
                    "diamond"

            }

        ]

    }

];

console.log("Rewards loaded", REWARDS);