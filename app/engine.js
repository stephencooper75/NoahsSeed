class Engine {

    constructor() {

        this.eventBus = new EventBus();


        this.progressSystem =
            new ProgressSystem(
                this.eventBus
            );


        this.navigation = new NavigationSystem();

        this.navigation.register("welcomeScreen");
        this.navigation.register("locationScreen");
        this.navigation.register("gameScreen");

        this.navigation.show("welcomeScreen");


        this.world = new WorldSystem(this.eventBus);


        this.locationSystem =
            new LocationSystem(
                this.eventBus,
                this.world
            );


        this.world.loadWorld(NOAH_WORLD);



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


                this.navigation.show("gameScreen");


                document
                    .getElementById("locationInfo")
                    .innerHTML =
                    `
                    <h2>${location.icon} ${location.name}</h2>
                    <p>${location.description}</p>
                    `;



                const activityContainer =
                    document.getElementById(
                        "generatedActivities"
                    );


                activityContainer.innerHTML = "";



                for (const activityId of location.activities) {


                    const activity =
                        ACTIVITY_LIBRARY[activityId];



                    const button =
                        document.createElement("button");



                    button.textContent =
                        `${activity.icon} ${activity.name}`;



                    button.addEventListener(
                        "click",
                        () => {


                            document
                                .getElementById("message")
                                .innerHTML =
                                `
                                <h2>${activity.icon} ${activity.name}</h2>
                                <p>${activity.message}</p>
                                `;



                            this.eventBus.publish(
                                "activity_completed",
                                {
                                    id: activity.id,
                                    name: activity.name
                                }
                            );

                        }
                    );



                    activityContainer.appendChild(button);

                }

            }
        );



        document
            .getElementById("startButton")
            .addEventListener(
                "click",
                () => {

                    this.navigation.show(
                        "locationScreen"
                    );

                    this.locationSystem
                        .displayLocations();

                }
            );


    }

}



const engine = new Engine();