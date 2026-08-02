class WorldRenderer {

    constructor(worldState) {

        this.worldState = worldState;

    }



    renderLocation(locationId) {

        const entities =
            Object.values(
                this.worldState.data.entities.registry
            ).filter(
                entity =>
                    entity.location === locationId
            );

        return {

            location: locationId,

            entities: entities

        };

    }



    renderEntity(entity) {

        switch (entity.type) {

            case "plants":

                return this.renderPlant(entity);

            default:

                return {

                    icon: "❓",

                    name: entity.name

                };

        }

    }



    renderPlant(entity) {

        let icon = "🌱";

        switch (
            entity.state.growthStage
        ) {

            case "seedling":

                icon = "🌱";
                break;

            case "young tree":

                icon = "🌿";
                break;

            case "mature tree":

                icon = "🌳";
                break;

            case "fruit tree":

                icon = "🍎🌳";
                break;

        }

        return {

            icon,

            name: entity.name,

            state: entity.state

        };

    }

}