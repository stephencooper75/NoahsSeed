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
        activities
    ) {

        container.innerHTML = "";

        for (const activityId of activities) {

            const activity =
                this.contentLoader.get(
                    "activities",
                    activityId
                );

            if (!activity) {

                continue;

            }

            const button =
                document.createElement(
                    "button"
                );

            button.textContent =
                `${activity.icon} ${activity.name}`;

            button.addEventListener(

                "click",

                () => {

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

}