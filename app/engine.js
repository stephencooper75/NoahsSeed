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

console.log(this.activities);
    
}

registerActivity(activityData) {

    this.activities[activityData.id] = new Activity(activityData);

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

displayActivityButton(button) {

document.getElementById("message").innerHTML = activity.message;

}

completeActivity(button, activityId) {

    const activity = this.activities[activityId];

    console.log(activity);

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