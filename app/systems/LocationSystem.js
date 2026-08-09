class LocationSystem {

    constructor(eventBus, worldSystem) {

        this.eventBus = eventBus;

        this.worldSystem = worldSystem;

        this.container =
            document.getElementById("locations");

    }

    getLocations() {

        return this.worldSystem.world.locations;

    }

    // --------------------------------------------------
    // Backwards compatible alias
    // --------------------------------------------------

    showLocations() {

        this.displayLocations();

    }

    displayLocations() {

        this.container.innerHTML = "";

        for (const location of this.getLocations()) {

            const button =
                document.createElement("button");

            button.textContent =
                `${location.icon || ""} ${location.name}`;

            button.addEventListener(

                "click",

                () => {

                    this.chooseLocation(
                        location.id
                    );

                }

            );

            this.container.appendChild(
                button
            );

        }

    }

    chooseLocation(locationId) {

        const location =
            this.getLocations().find(

                location =>
                    location.id === locationId

            );

        if (!location) {

            console.warn(

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