class LocationSystem {

    constructor(eventBus, worldSystem) {

        this.eventBus = eventBus;

        this.worldSystem = worldSystem;

    }


    getLocations() {

        return this.worldSystem.world.locations;

    }


    chooseLocation(locationId) {

        const location =
            this.getLocations()
                .find(
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


        this.eventBus.publish(
            "location_selected",
            location
        );

    }

}