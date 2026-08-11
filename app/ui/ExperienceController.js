class ExperienceController {

    constructor() {

        this.window =

            document.getElementById(
                "experienceWindow"
            );

        this.experiences = {};

    }

    register(id, experience) {

        this.experiences[id] =
            experience;

    }

    open(id) {

        const experience =
            this.experiences[id];

        if (!experience) {

            console.warn(

                "Experience not found:",

                id

            );

            return;

        }

        this.window.style.display =
            "block";

        this.window.innerHTML =
            experience.render();

        if (experience.bindEvents) {

            experience.bindEvents();

        }

    }

    close() {

        this.window.style.display =
            "none";

    }

}