class JournalSystem {

    constructor() {

        this.entries = [];

    }

    add(title, text) {

        this.entries.push({

            date: new Date(),

            title,

            text

        });

        console.log(

            "Journal updated:",

            title

        );

    }

    getEntries() {

        return this.entries;

    }

}