class EntitySystem {

    constructor(
        worldState
    ) {

        this.worldState =
            worldState;


        this.entities =
            this.worldState.data.entities.registry;


    }



    create(data) {


        const entity =
            new Entity(
                data
            );


        this.entities[entity.id] =
            entity.getData();


        console.log(
            "Entity created:",
            entity
        );


        return entity;

    }





    get(id) {


        const data =
            this.entities[id];



        if (!data) {

            return null;

        }



        return new Entity(
            data
        );


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
            this.get(id);



        if (!entity) {

            console.log(
                "Entity not found:",
                id
            );

            return false;

        }



        entity.updateState(
            changes
        );



        this.entities[id] =
            entity.getData();



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