class InventorySystem {

    constructor(
        worldState
    ) {

        this.worldState =
            worldState;


        if (
            !this.worldState.data.inventories
        ) {

            this.worldState.data.inventories = {};

        }

    }



    create(name) {

        if (
            !this.worldState.data.inventories[name]
        ) {

            this.worldState.data.inventories[name] = [];

        }

    }



    add(
        inventory,
        entityId
    ) {

        this.create(
            inventory
        );


        const items =
            this.worldState.data
                .inventories[inventory];


        if (
            !items.includes(
                entityId
            )
        ) {

            items.push(
                entityId
            );

        }

    }



    remove(
        inventory,
        entityId
    ) {

        this.create(
            inventory
        );


        this.worldState.data
            .inventories[inventory] =
                this.worldState.data
                    .inventories[inventory]
                    .filter(
                        id =>
                            id !== entityId
                    );

    }



    contains(
        inventory,
        entityId
    ) {

        this.create(
            inventory
        );


        return this.worldState.data
            .inventories[inventory]
            .includes(
                entityId
            );

    }



    getItems(
        inventory
    ) {

        this.create(
            inventory
        );


        return this.worldState.data
            .inventories[inventory];

    }

}