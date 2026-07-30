class ContentManager {

    constructor(contentLoader) {

        this.contentLoader = contentLoader;

    }



    registerContent(
        category,
        data
    ) {


        for (
            const item of data
        ) {


            this.contentLoader.register(
                category,
                item.id,
                item
            );


        }


    }



    loadAll() {


        this.registerContent(
            "activities",
            ACTIVITY_DATA
        );


        this.registerContent(
            "rewards",
            REWARD_DATA
        );


        this.registerContent(
            "achievements",
            ACHIEVEMENT_DATA
        );


        console.log(
            "All content loaded"
        );


    }

}