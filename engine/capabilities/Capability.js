class Capability {

    constructor(
        id,
        name
    ) {

        this.id = id;

        this.name = name;

    }

    canExecute(
        context
    ) {

        return true;

    }

    execute(
        context
    ) {

        throw new Error(

            "Capability must implement execute()."

        );

    }

}