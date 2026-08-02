class RewardSystem {

    constructor(
        eventBus,
        worldState
    ) {

        this.eventBus = eventBus;

        this.worldState = worldState;


        eventBus.subscribe(
            "achievement_unlocked",
            (reward) => {

                this.unlockReward(
                    reward
                );

            }
        );

    }



 unlockReward(reward) {

    if (
        !this.worldState.data.progression.achievements
    ) {

        this.worldState.data.progression.achievements = [];

    }


    const alreadyUnlocked =
        this.worldState.data
            .progression
            .achievements
            .some(
                achievement =>
                    achievement.id === reward.id
            );


    if (
        alreadyUnlocked
    ) {

        return;

    }


    this.worldState.data
        .progression
        .achievements
        .push(
            reward
        );


    console.log(
        "Reward unlocked:",
        reward
    );


    this.eventBus.publish(
        "reward_unlocked",
        reward
    );

}



    getRewards() {

        return (
            this.worldState
                .data
                .progression
                .achievements
        );

    }

}