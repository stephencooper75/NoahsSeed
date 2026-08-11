class LocationSystem {

    constructor(
        eventBus,
        worldSystem,
        worldMapRenderer
    ) {

        this.eventBus =
            eventBus;

        this.worldSystem =
            worldSystem;

        this.worldMapRenderer =
            worldMapRenderer;

        this.container =
            document.getElementById(
                "locations"
            );

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

        this.container.innerHTML =
            this.worldMapRenderer.render();

        const nodes =
            this.container.querySelectorAll(
                ".mapNode"
            );

        for (const node of nodes) {

            node.addEventListener(

                "click",

                () => {

                    this.chooseLocation(

                        node.dataset.location

                    );

                }

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

PLAYER.travelling = true;

PLAYER.destination = locationId;

        PLAYER.x =
            WORLD_MAP.locations[
                locationId
            ].x + 25;

        PLAYER.y =
            WORLD_MAP.locations[
                locationId
            ].y + 20;

        this.displayLocations();

        setTimeout(

            () => {

                PLAYER.location =
    PLAYER.destination;

PLAYER.destination =
    null;

PLAYER.travelling =
    false;

this.displayLocations();

                this.eventBus.publish(

                    "location_selected",

                    location

                );

            },

            700

        );

    }

}