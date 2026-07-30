class ProgressSystem {

    constructor(eventBus) {

        this.eventBus = eventBus;

        this.xp = 0;

        this.level = 1;

        this.completedActivities = [];


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

        this.xp += 1;


        this.completedActivities.push(
            activity.id
        );


        const previousLevel =
            this.level;


        this.level =
            this.getLevel();



        if (this.level > previousLevel) {

            this.eventBus.publish(
                "level_up",
                {
                    level: this.level
                }
            );

        }


        this.updateDisplay();



        console.log(
            "Progress updated:",
            this.getProgress()
        );

    }



    getLevel() {

        return Math.floor(this.xp / 10) + 1;

    }



    updateDisplay() {

        if (!this.display) {

            return;

        }


        this.display.innerHTML =
        `
        🌱 Nature Progress

        <br>

        ⭐ XP: ${this.xp}

        <br>

        🌿 Level: ${this.level}

        <br>

        🏆 Activities completed:
        ${this.completedActivities.length}
        `;

    }



    getProgress() {

        return {

            xp: this.xp,

            level: this.level,

            completed:
                this.completedActivities.length

        };

    }

}