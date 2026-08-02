class InteractionSystem {

    constructor(
        eventBus
    ) {

        this.eventBus =
            eventBus;

    }



    interact(target) {

        console.log(
            "Interaction:",
            target
        );


        this.eventBus.publish(

            "interaction",

            target

        );

    }

}