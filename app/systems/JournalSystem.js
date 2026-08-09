class JournalSystem {

    constructor() {

        this.entries = [];

        this.memories = [];

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

    addMemory(memory) {

        const exists = this.memories.find(

            m => m.id === memory.id

        );

        if (exists) {

            return;

        }

        this.memories.push(memory);

        console.log(

            "Memory unlocked:",

            memory.name

        );

    }

    getEntries() {

        return this.entries;

    }

    getMemories() {

        return this.memories;

    }

}