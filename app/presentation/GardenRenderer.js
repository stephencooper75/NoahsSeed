class GardenRenderer {

    constructor(entitySystem) {

        this.entitySystem = entitySystem;

    }

    render() {

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );

        if (plants.length === 0) {

            return `

            <div class="gardenEmpty">

                <h2>🌱 Your Garden</h2>

                <p>

                    Your garden is waiting for
                    its very first seed.

                </p>

                <p>

                    Every great garden begins
                    with one tiny seed.

                </p>

            </div>

            `;

        }

        let html =
            `<div class="gardenGrid">`;

        for (const plant of plants) {

            html +=
                this.renderPlant(plant);

        }

        html +=
            `</div>`;

        return html;

    }

    renderPlant(plant) {

        const growth =
            plant.state.growth ?? 0;

        const water =
            plant.state.water ?? 0;

        let icon = "🌰";

        let title =
            "Apple Seed";

        let description =
            "Sleeping safely beneath the soil.";

        let nextStage =
            "Sprout";

        let nextGrowth =
            100;

        let action = "";

        //------------------------------------------------
        // Growth Stages
        //------------------------------------------------

        if (growth >= 100) {

            icon = "🌱";

            title =
                "Tiny Sprout";

            description =
                "Something wonderful has begun.";

            nextStage =
                "Young Tree";

            nextGrowth =
                300;

            action = `

<button
class="gardenAction"
onclick="window.game.showCompanion('${plant.id}')">

🏃 Show Companion

</button>

`;

        }

        if (growth >= 300) {

            icon = "🌿";

            title =
                "Young Apple Tree";

            description =
                "Growing a little stronger every day.";

            nextStage =
                "Tree";

            nextGrowth =
                700;

        }

        if (growth >= 700) {

            icon = "🌳";

            title =
                "Apple Tree";

            description =
                "Standing proudly in your garden.";

            nextStage =
                "Fruit";

            nextGrowth =
                950;

        }

        if (growth >= 950) {

            icon = "🍎";

            title =
                "Apple Tree";

            description =
                "Your patience has been rewarded.";

            nextStage =
                "Complete";

            nextGrowth =
                950;

        }

        //------------------------------------------------
        // Water
        //------------------------------------------------

        let moisture = "Dry";

        if (water >= 25) {

            moisture = "Moist";

        }

        if (water >= 75) {

            moisture = "Happy";

        }

        //------------------------------------------------
        // Progress
        //------------------------------------------------

        let progress = Math.min(

            Math.round(

                (growth / nextGrowth) * 100

            ),

            100

        );

        return `

<div class="gardenPlant">

    <div class="plantIcon">

        ${icon}

    </div>

    <h3>

        ${title}

    </h3>

    <p>

        ${description}

    </p>

    <p>

        💧 ${moisture}

    </p>

    <p>

        🌱 Growth: ${growth}

    </p>

    <p>

        📈 ${progress}%

    </p>

    <p>

        ⭐ Next Stage: ${nextStage}

    </p>

    ${action}

</div>

`;

    }

}