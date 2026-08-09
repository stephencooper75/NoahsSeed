class Game {

    constructor() {

        this.eventBus = new EventBus();


        this.worldState =
            new WorldState();

            
            this.worldClock =
    new WorldClock();



    this.simulationSystem =
    new SimulationSystem(

        this.eventBus,

        this.worldClock

    );


    this.plantSimulation =
    new PlantSimulation();

    this.debugOverlay =
    new DebugOverlay();


    this.gameLoop =
    new GameLoop(

        this.simulationSystem,

        10

    );



        this.contentLoader =
            new ContentLoader();



        this.contentManager =
            new ContentManager(
                this.contentLoader
            );


        this.contentManager.loadAll();



        this.systemManager =
            new SystemManager();

this.saveSystem =
    new SaveSystem(
        this.eventBus,
        this.worldState
    );


this.systemManager.register(
    "save",
    this.saveSystem
);


this.saveSystem.load();



this.entitySystem =
    new EntitySystem(
        this.worldState
    );

this.gardenRenderer =
    new GardenRenderer(
        this.entitySystem
    );


this.systemManager.register(
    "entity",
    this.entitySystem
);

this.systemManager.register(

    "simulation",

    this.simulationSystem

);


this.simulationSystem.register(

    this.plantSimulation

);


this.eventBus.subscribe(

    "world_tick",

    data => {

        this.debugOverlay.update(
            data
        );

    }

);


this.eventBus.subscribe(

    "plant_stage_changed",

    data => {

        if (
            data.stage === "sprout"
        ) {

            document
                .getElementById(
                    "message"
                )
                .innerHTML = `

<h2>🌱 Something Changed</h2>

<p>

A tiny sprout has appeared!

</p>

<p>

Maybe someone would like
to see it...

</p>

`;

        }

    }

);

this.activitySystem =
    new ActivitySystem(
        this.eventBus,
        this.entitySystem
    );

this.systemManager.register(
    "activity",
    this.activitySystem
);

this.natureSystem =
    new NatureSystem(
        this.eventBus,
        this.entitySystem
    );

this.systemManager.register(
    "nature",
    this.natureSystem
);





        this.progressSystem =
            new ProgressSystem(
                this.eventBus,
                this.worldState
            );


        this.systemManager.register(
            "progress",
            this.progressSystem
        );




        this.rewardSystem =
            new RewardSystem(
                this.eventBus,
                this.worldState
            );


        this.systemManager.register(
            "reward",
            this.rewardSystem
        );




        this.achievementSystem =
            new AchievementSystem(
                this.eventBus,
                this.rewardSystem
            );


        this.systemManager.register(
            "achievement",
            this.achievementSystem
        );




        this.navigation =
            new NavigationSystem();



        this.navigation.register("welcomeScreen");

        this.navigation.register("locationScreen");

        this.navigation.register("gameScreen");



        this.navigation.show(
            "welcomeScreen"
        );




        this.world =
            new WorldSystem(
                this.eventBus
            );


        this.systemManager.register(
            "world",
            this.world
        );




        this.locationSystem =
            new LocationSystem(
                this.eventBus,
                this.world
            );


        this.systemManager.register(
            "location",
            this.locationSystem
        );




        this.world.loadWorld(
            NOAH_WORLD
        );


        this.gameLoop.start();





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

    "garden_updated",

    () => {

        const garden =
            document.getElementById(
                "gardenView"
            );

        if (!garden) {

            return;

        }

        garden.innerHTML =
            this.gardenRenderer.render();

    }

);




        this.eventBus.subscribe(
            "level_up",
            (data) => {

                document
                    .getElementById("message")
                    .innerHTML =
                    `
                    <h2>🌟 Level Up!</h2>
                    <p>
                    Congratulations Noah!
                    You reached Nature Level ${data.level}.
                    </p>
                    `;


                console.log(
                    "Level up event received:",
                    data
                );

            }
        );






        this.eventBus.subscribe(
            "location_selected",
            (location) => {


                this.navigation.show(
                    "gameScreen"
                );


/*
document
    .getElementById("gardenView")
    .innerHTML =
    this.gardenView.render();
*/


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





                if (
                    location.activities.length === 0
                ) {

                    activityContainer.innerHTML =
                    `
                    <p>
                    ✨ More adventures coming soon!
                    </p>
                    `;

                    return;

                }





const plants =
    this.entitySystem.getByCategory(
        "plants"
    );

const hasPlants =
    plants.length > 0;

for (const activityId of location.activities) {

    const activity =
        this.contentLoader.get(
            "activities",
            activityId
        );

    if (!activity) {

        continue;

    }

    // ---------- Dynamic availability ----------

    if (
        activity.id === "water_plants" &&
        !hasPlants
    ) {

        continue;

    }

    if (
        activity.id === "discover_insect"
    ) {

        continue;

    }

    // ------------------------------------------

    const button =
        document.createElement(
            "button"
        );

    if (
        activity.id === "water_plants"
    ) {

        button.textContent =
            "💧 Gently Water Seed";

    }
    else {

        button.textContent =
            `${activity.icon} ${activity.name}`;

    }

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

            const activityInstance =
                new Activity(activity);

            this.activitySystem.start(
                activityInstance
            );

            this.activitySystem.complete(
                activityInstance
            );

        }
    );

    activityContainer.appendChild(
        button
    );

}

            }
        );






document
    .getElementById("spaceInvadersButton")
    .addEventListener(
        "click",
        () => {

  engine.experiences
    .get("space")
    .start();

        }
    );


    }


    showCompanion(plantId) {

        document
            .getElementById("message")
            .innerHTML = `

        <h2>😊 Dad</h2>

        <p>
            I'm glad you showed me.
        </p>

        <p>
            We'll keep watching together.
        </p>

        `;

    }
}

window.game = new Game();