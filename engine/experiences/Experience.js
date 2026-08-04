/**
 * --------------------------------------------------------
 * Noah Engine
 * --------------------------------------------------------
 *
 * Component:
 * Base Experience
 *
 * Purpose:
 * Base class for every playable experience.
 */

class Experience {

    constructor(id, name) {

        this.id = id;
        this.name = name;

    }

    start() {

        console.log(`${this.name} started`);

    }

    stop() {

        console.log(`${this.name} stopped`);

    }

}

window.Experience = Experience;