class EventBus {

    constructor() {

        this.events = {};

    }


    subscribe(eventName, callback) {

        if (!this.events[eventName]) {

            this.events[eventName] = [];

        }

        this.events[eventName].push(callback);

    }


    publish(eventName, data) {

        console.log("Event published:", eventName, data);


        if (!this.events[eventName]) {

            return;

        }


        for (const callback of this.events[eventName]) {

            callback(data);

        }

    }

}