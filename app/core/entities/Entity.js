class Entity {

    constructor(data) {


        this.id =
            data.id;


        this.type =
            data.type;


        this.name =
            data.name || "";


        this.location =
            data.location || null;


        this.state =
            data.state || {};


        this.metadata =
            data.metadata || {};


    }



    updateState(
        changes
    ) {


        Object.assign(
            this.state,
            changes
        );


    }



    moveTo(
        location
    ) {


        this.location =
            location;


    }



    getData() {

        return {

            id: this.id,

            type: this.type,

            name: this.name,

            location: this.location,

            state: this.state,

            metadata: this.metadata

        };

    }

}