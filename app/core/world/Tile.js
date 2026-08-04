class Tile {

    constructor(
        x,
        y,
        terrain = "grass"
    ) {

        this.x = x;

        this.y = y;

        this.terrain = terrain;

        this.entities = [];

    }

    addEntity(entityId) {

        this.entities.push(
            entityId
        );

    }

    removeEntity(entityId) {

        this.entities =
            this.entities.filter(
                id => id !== entityId
            );

    }

}