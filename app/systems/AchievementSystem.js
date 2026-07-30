console.log("AchievementSystem file loaded");

class AchievementSystem {

    constructor(
        eventBus,
        rewardSystem
    ) {

        console.log(
            "AchievementSystem started"
        );


        this.rewardSystem =
            rewardSystem;


        eventBus.subscribe(
            "activity_completed",
            (activity) => {

                console.log(
                    "AchievementSystem received:",
                    activity
                );


                this.checkAchievements(
                    activity
                );

            }
        );

    }



    checkAchievements(activity) {


        console.log(
            "Checking achievements for:",
            activity.id
        );



        if (
            activity.id === "plant_seed"
        ) {


            console.log(
                "First seed achievement unlocked"
            );



            this.rewardSystem.unlockReward(
                {
                    id: "first_seed",
                    name:
                        "First Seed Certificate"
                }
            );

        }


    }

}