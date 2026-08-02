class WorldClock {

    constructor() {

        this.currentTick = 0;

    }



    tick() {

        this.currentTick++;

        return this.currentTick;

    }



    getTick() {

        return this.currentTick;

    }



    reset() {

        this.currentTick = 0;

    }

}