class SystemManager {

    constructor() {

        this.systems = {};

    }



    register(
        name,
        system
    ) {


        this.systems[name] = system;


        console.log(
            "System registered:",
            name
        );


    }



    get(
        name
    ) {

        return this.systems[name];

    }



    getAll() {

        return this.systems;

    }

}