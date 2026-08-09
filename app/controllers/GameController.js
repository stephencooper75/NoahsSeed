class GameController {

    constructor() {

        this.game = null;

    }

    start() {

        console.log(
            "GameController starting..."
        );

        this.game = new Game();

        return this.game;

    }

    restart() {

        console.log(
            "Restarting game..."
        );

        this.game = new Game();

        return this.game;

    }

    getGame() {

        return this.game;

    }

}