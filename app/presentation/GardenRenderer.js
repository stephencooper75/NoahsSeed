class GardenRenderer {

    constructor(entitySystem) {

        this.entitySystem =
            entitySystem;

    }



    render() {

        const plants =
            this.entitySystem.getByCategory(
                "plants"
            );



        if (plants.length === 0) {

            return `

                <div class="gardenEmpty">

                    <h3>🌱 Empty Garden</h3>

                    <p>

                        Plant your first seed!

                    </p>

                </div>

            `;

        }



        let html =
            `<div class="gardenGrid">`;



        for (const plant of plants) {

            const growth =
                plant.state.growth ?? 0;

            const water =
                plant.state.water ?? 0;



            let icon = "🌰";

            let stage = "Seed";



            if (growth >= 100) {

                icon = "🌱";

                stage = "Sprout";

            }



            if (growth >= 300) {

                icon = "🌿";

                stage = "Young Plant";

            }



            if (growth >= 700) {

                icon = "🌳";

                stage = "Tree";

            }



            if (growth >= 950) {

                icon = "🍎";

                stage = "Fruit Tree";

            }



            let waterStatus =
                "Dry";



            if (water >= 25) {

                waterStatus =
                    "Moist";

            }



            if (water >= 75) {

                waterStatus =
                    "Well Watered";

            }



            html += `

                <div class="gardenPlant">

                    <div class="plantIcon">

                        ${icon}

                    </div>

                    <div class="plantName">

                        ${plant.name}

                    </div>

                    <div class="plantStage">

                        ${stage}

                    </div>

                    <div class="plantWater">

                        💧 ${waterStatus}

                    </div>

                    <div class="plantWater">

                        Growth:
                        ${growth}

                    </div>

                </div>

            `;

        }



        html += "</div>";



        return html;

    }

}