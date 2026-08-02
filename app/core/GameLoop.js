class GameLoop {

    constructor(update) {

        this.update = update;

        this.running = false;

    }



    start() {

        if (this.running) {

            return;

        }

        this.running = true;

        this.loop();

    }



    stop() {

        this.running = false;

    }



    loop() {

        if (!this.running) {

            return;

        }

        this.update();

        requestAnimationFrame(

            () => this.loop()

        );

    }

}