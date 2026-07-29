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

        this.eventBus = new EventBus();

this.activityRegistry = new Registry("Activity");

this.world = new WorldSystem(this.eventBus);
this.locationSystem =
    new LocationSystem(
        this.eventBus,
        this.world
    );
this.world.loadWorld({

    name: "Noah's World",

    locations: [

        {
            id: "home",
            name: "Home"
        },

        {
            id: "garden",
            name: "Garden"
        },

        {
            id: "beach",
            name: "Beach"
        }

    ]

});

this.eventBus.subscribe(
    "activity_completed",
    (data) => {

        console.log(
            "Activity completed event received:",
            data
        );

    }
);

this.eventBus.subscribe(
    "location_selected",
    (location) => {

        console.log(
            "Location selected:",
            location
        );

    }
);

        this.navigation = new NavigationSystem();

        this.navigation.register("welcomeScreen");
        this.navigation.register("gameScreen");

        this.navigation.show("welcomeScreen");

        this.activities = {};
        this.completed = 0;

        this.generatedActivities =
            document.getElementById("generatedActivities");

for (const activity of ACTIVITY_DATA) {

    this.registerActivity(activity);

    this.activityRegistry.register(
        activity.id,
        activity
    );

}

        for (const activity of ACTIVITY_DATA) {
            this.createActivityButton(activity.id);
        }

        document
            .getElementById("startButton")
            .addEventListener("click", () => {

                this.navigation.show("gameScreen");

            });

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

            this.eventBus.publish(
    "activity_completed",
    {
        id: activity.id,
        name: activity.name
    }
);

    }

}

const engine = new Engine();