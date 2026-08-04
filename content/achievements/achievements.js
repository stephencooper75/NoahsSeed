console.log(
    "Loading achievements.js"
);


window.ACHIEVEMENTS = [

    {
        id: "first_seed",

        name: "First Seed Planted",

        description:
            "Plant your first seed in the garden.",


        trigger:
            "activity_completed",


        condition: {

            activity:
                "plant_seed"

        },


        reward:
            "first_seed"

    }

];

console.log("Achievements loaded", ACHIEVEMENTS);