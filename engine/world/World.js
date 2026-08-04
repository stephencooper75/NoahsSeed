/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Component:
 * World
 *
 * Purpose:
 * Represents the complete simulated world.
 */

class World {

    constructor(id, name) {

        this.id = id;
        this.name = name;

        this.locations = [];
        this.entities = [];
        this.simulations = [];

    }

    addLocation(location) {

        this.locations.push(location);

    }

    addEntity(entity) {

        this.entities.push(entity);

    }

    addSimulation(simulation) {

        this.simulations.push(simulation);

    }

}

window.World = World;