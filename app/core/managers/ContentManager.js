class ContentManager {

    constructor(contentLoader) {

        this.contentLoader =
            contentLoader;

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

            ACTIVITIES

        );



        this.registerContent(

            "rewards",

            REWARDS

        );



        this.registerContent(

            "achievements",

            ACHIEVEMENTS

        );



        if (

            typeof PLANTS !==
            "undefined"

        ) {

            this.registerContent(

                "plants",

                PLANTS

            );

        }



        console.log(

            "All content loaded"

        );

    }

}