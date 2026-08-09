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

            "📖 Journal:",

            title

        );

    }

    has(title) {

        return this.entries.some(

            entry => entry.title === title

        );

    }

    getEntries() {

        return this.entries;

    }

}