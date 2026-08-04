class ActivityCapability extends Capability {

    constructor() {

        super(

            "activity",

            "Activity"

        );

    }

    execute(
        activity
    ) {

        console.log(

            `Executing activity: ${activity.id}`

        );

    }

}