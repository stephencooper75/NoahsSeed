class Activity {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
        this.message = data.message;
    }
}

class Engine {
    constructor() {

        this.activities = {};
        this.completed = 0;

        this.generatedActivities =
            document.getElementById("generatedActivities");

        for (const activity of ACTIVITY_DATA) {
            this.registerActivity(activity);
        }

        for (const activity of ACTIVITY_DATA) {
            this.createActivityButton(activity.id);
        }

        document
            .getElementById("startButton")
            .addEventListener("click", () => {
                this.startAdventure();
            });

        console.log(this.activities);
    }

    startAdventure() {

        document
            .getElementById("welcomeScreen")
            .classList.add("hidden");

        document
            .getElementById("gameScreen")
            .classList.remove("hidden");

    }

    registerActivity(activityData) {

        this.activities[activityData.id] =
            new Activity(activityData);

    }

    createActivityButton(activityId) {

        const button = document.createElement("button");

        const activity = this.activities[activityId];

        button.textContent =
            `${activity.icon} ${activity.name}`;

        button.addEventListener("click", () => {
            this.completeActivity(button, activityId);
        });

        this.generatedActivities.appendChild(button);

    }

    completeActivity(button, activityId) {

        const activity = this.activities[activityId];

        button.textContent =
            `✅ ${activity.name}`;

        button.disabled = true;

        this.completed++;

        document.getElementById("progress").textContent =
            `${this.completed} / ${Object.keys(this.activities).length} completed`;

        document.getElementById("message").innerHTML =
            activity.message;

    }
}

const engine = new Engine();