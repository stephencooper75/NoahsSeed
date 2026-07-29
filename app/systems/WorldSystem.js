class WorldSystem {

    constructor(eventBus) {

        this.eventBus = eventBus;

        this.world = null;

        this.currentLocation = null;

    }


    loadWorld(worldData) {

        this.world = worldData;

        this.currentLocation =
            worldData.locations[0];

        console.log(
            "World loaded:",
            this.world.name
        );


        this.eventBus.publish(
            "world_loaded",
            this.world
        );

    }


    moveTo(locationId) {

        const location =
            this.world.locations.find(
                location =>
                    location.id === locationId
            );


        if (!location) {

            console.log(
                "Location not found:",
                locationId
            );

            return;

        }


        this.currentLocation = location;


        this.eventBus.publish(
            "location_changed",
            location
        );

    }

}