class EntitySystem {

    constructor() {

        this.entities = {};

    }



    create(entity) {


        this.entities[entity.id] = entity;


        console.log(
            "Entity created:",
            entity
        );


        return entity;

    }



    get(id) {

        return this.entities[id];

    }



    remove(id) {


        delete this.entities[id];


        console.log(
            "Entity removed:",
            id
        );

    }



    update(
        id,
        changes
    ) {


        const entity =
            this.entities[id];



        if (!entity) {

            console.log(
                "Entity not found:",
                id
            );

            return false;

        }



        Object.assign(
            entity,
            changes
        );


        console.log(
            "Entity updated:",
            entity
        );


        return true;

    }



    getAll() {

        return this.entities;

    }

}