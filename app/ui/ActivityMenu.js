class ActivityMenu {

    constructor(
        contentLoader,
        activitySystem
    ) {

        this.contentLoader =
            contentLoader;

        this.activitySystem =
            activitySystem;

    }

    build(
        container,
        location,
        entitySystem,
        onActivityStarted = null
    ) {

        container.innerHTML = "";

        if (
            !location ||
            !location.activities ||
            location.activities.length === 0
        ) {

            container.innerHTML = `

<p>

✨ More adventures coming soon!

</p>

`;

            return;

        }

        const plants =
            entitySystem.getByCategory(
                "plants"
            );

        const hasPlants =
            plants.length > 0;

        for (const activityId of location.activities) {

            const activity =
                this.contentLoader.get(
                    "activities",
                    activityId
                );

            if (!activity) {

                continue;

            }

            if (

                activity.id === "water_plants" &&

                !hasPlants

            ) {

                continue;

            }

            if (

                activity.id === "discover_insect"

            ) {

                continue;

            }

            const button =
                document.createElement(
                    "button"
                );

            button.textContent =
                this.getButtonCaption(
                    activity
                );

            button.addEventListener(

                "click",

                () => {

                    if (
                        onActivityStarted
                    ) {

                        onActivityStarted(
                            activity
                        );

                    }

                    const activityInstance =
                        new Activity(
                            activity
                        );

                    this.activitySystem.start(
                        activityInstance
                    );

                    this.activitySystem.complete(
                        activityInstance
                    );

                }

            );

            container.appendChild(
                button
            );

        }

    }

    getButtonCaption(
        activity
    ) {

        if (

            activity.id ===
            "water_plants"

        ) {

            return
                "💧 Gently Water Seed";

        }

        return `${activity.icon} ${activity.name}`;

    }

}