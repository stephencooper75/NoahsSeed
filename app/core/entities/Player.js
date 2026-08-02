class Player extends Entity {

    constructor(data) {

        super(data);

        this.position =
            data.position || {
                x: 0,
                y: 0
            };

        this.direction =
            data.direction || "down";

        this.avatar =
            data.avatar || {};

        this.currentLocation =
            data.currentLocation || "home";

        this.currentActivity =
            data.currentActivity || null;

    }



    moveTo(locationId) {

        this.currentLocation =
            locationId;

    }



    setPosition(x, y) {

        this.position = {
            x,
            y
        };

    }



    face(direction) {

        this.direction =
            direction;

    }



    getData() {

        return {

            ...super.getData(),

            position:
                this.position,

            direction:
                this.direction,

            avatar:
                this.avatar,

            currentLocation:
                this.currentLocation,

            currentActivity:
                this.currentActivity

        };

    }

}