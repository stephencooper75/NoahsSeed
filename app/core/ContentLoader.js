class ContentLoader {

    constructor() {

        this.content = {};

    }



    register(
        category,
        id,
        data
    ) {

        if (!this.content[category]) {

            this.content[category] = {};

        }


        this.content[category][id] =
            data;


        console.log(
            `${category} content registered:`,
            id
        );

    }



    get(
        category,
        id
    ) {

        if (
            !this.content[category]
        ) {

            return null;

        }


        return this.content[category][id];

    }



    getAll(category) {

        return (
            this.content[category]
            || {}
        );

    }

}