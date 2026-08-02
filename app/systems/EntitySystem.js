class EntitySystem {

    constructor(
        worldState
    ) {

        this.worldState =
            worldState;

        this.entities =
            this.worldState.data.entities.registry;

        this.categories =
            this.worldState.data.entities.categories;

    }



    create(data) {

        const entity =
            new Entity(
                data
            );


        this.entities[entity.id] =
            entity.getData();


        if (
            this.categories[entity.type]
        ) {

            if (
                !this.categories[entity.type].includes(
                    entity.id
                )
            ) {

                this.categories[entity.type].push(
                    entity.id
                );

            }

        }


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

        const entity =
            this.get(id);


        if (entity) {

            if (
                this.categories[entity.type]
            ) {

                this.categories[entity.type] =
                    this.categories[entity.type].filter(
                        entityId =>
                            entityId !== id
                    );

            }

        }


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


getByCategory(category) {

    if (
        !this.categories[category]
    ) {

        return [];

    }


    return this.categories[category]
        .map(
            id => this.get(id)
        )
        .filter(
            entity => entity !== null
        );

}


    getAll() {

        return this.entities;

    }

}