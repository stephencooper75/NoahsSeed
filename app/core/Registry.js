class Registry {

    constructor(name) {

        this.name = name;

        this.items = {};

    }


    register(id, item) {

        this.items[id] = item;

        console.log(
            `${this.name} registered:`,
            id
        );

    }


    get(id) {

        return this.items[id];

    }


    getAll() {

        return this.items;

    }

}