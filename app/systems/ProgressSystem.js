class ProgressSystem {

    constructor(
        eventBus,
        worldState
    ) {

        this.eventBus = eventBus;

        this.worldState = worldState;


        if (!this.worldState.get("progression").xp) {

            this.worldState.set(
                "progression",
                {
                    xp: 0,

                    level: 1,

                    completedActivities: []

                }
            );

        }



        this.display =
            document.getElementById(
                "progressDisplay"
            );


        this.updateDisplay();



        eventBus.subscribe(
            "activity_completed",
            (activity) => {

                this.completeActivity(activity);

            }
        );

    }



    completeActivity(activity) {


        const progression =
            this.worldState.get(
                "progression"
            );


        progression.xp += 1;


        progression.completedActivities.push(
            activity.id
        );


        const previousLevel =
            progression.level;


        progression.level =
            this.getLevel(
                progression.xp
            );



        if (
            progression.level >
            previousLevel
        ) {

            this.eventBus.publish(
                "level_up",
                {
                    level:
                        progression.level
                }
            );

        }


        this.updateDisplay();



        console.log(
            "Progress updated:",
            this.getProgress()
        );

    }



    getLevel(xp) {

        return Math.floor(xp / 10) + 1;

    }



    updateDisplay() {


        if (!this.display) {

            return;

        }


        const progression =
            this.worldState.get(
                "progression"
            );


        this.display.innerHTML =
        `
        🌱 Nature Progress

        <br>

        ⭐ XP: ${progression.xp}

        <br>

        🌿 Level: ${progression.level}

        <br>

        🏆 Activities completed:
        ${progression.completedActivities.length}
        `;

    }



    getProgress() {

        return this.worldState.get(
            "progression"
        );

    }

}