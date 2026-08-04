/**
 * --------------------------------------------------------
 * Noah Engine
 * Coming Soon Experience
 * --------------------------------------------------------
 */

class ComingSoonExperience extends Experience {

    constructor(id, name) {

        super(id, name);

    }

    start() {

        console.log(

            `Launching Experience: ${this.name}`

        );

    }

}

window.ComingSoonExperience =
    ComingSoonExperience;