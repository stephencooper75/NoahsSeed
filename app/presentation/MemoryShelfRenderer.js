class MemoryShelfRenderer {

    constructor(journalSystem) {

        this.journalSystem =

            journalSystem;

    }

    render() {

        const memories =

            this.journalSystem.getMemories();

        if (memories.length === 0) {

            return `

                <div class="memoryShelf">

                    <h2>📚 Memory Shelf</h2>

                    <p>

                        Your adventures will be
                        remembered here.

                    </p>

                </div>

            `;

        }

        let html =

            `

            <div class="memoryShelf">

                <h2>

                    📚 Memory Shelf

                </h2>

            `;

        for (const memory of memories) {

            html += `

                <div class="memoryCard">

                    <h3>

                        ${memory.icon}

                        ${memory.name}

                    </h3>

                    <p>

                        ${memory.description}

                    </p>

                </div>

            `;

        }

        html +=

            "</div>";

        return html;

    }

}