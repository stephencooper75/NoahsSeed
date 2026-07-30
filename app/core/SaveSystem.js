class SaveSystem {

    constructor(worldState) {

        this.worldState = worldState;

        this.saveKey =
            "noahs_seed_world";

    }



    save() {

        this.worldState.updateLastSaved();


        localStorage.setItem(
            this.saveKey,
            JSON.stringify(
                this.worldState.getState()
            )
        );


        console.log(
            "World saved"
        );

    }



    load() {

        const savedData =
            localStorage.getItem(
                this.saveKey
            );


        if (!savedData) {

            console.log(
                "No saved world found"
            );

            return false;

        }


        this.worldState.data =
            JSON.parse(savedData);


        console.log(
            "World loaded"
        );


        return true;

    }



    clear() {

        localStorage.removeItem(
            this.saveKey
        );


        console.log(
            "Saved world cleared"
        );

    }

}