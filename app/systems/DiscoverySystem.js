class DiscoverySystem {

    constructor(eventBus, worldState) {

        this.eventBus = eventBus;
        this.worldState = worldState;

        this.ensureState();
        this.register();

    }


    ensureState() {

        const collections =
            this.worldState.get("collections");

        if (!collections.discoveries) {

            collections.discoveries = [];

        }

    }


    register() {

        this.eventBus.subscribe(
            "plant_stage_changed",
            data => {

                if (data.stage !== "sprout") {

                    return;

                }

                this.discover(
                    "firstSprout",
                    {
                        method: "plant_growth"
                    }
                );

            }
        );

    }


    getDefinition(id) {

        return DISCOVERIES[id] || null;

    }


    has(id) {

        const discoveries =
            this.worldState
                .get("collections")
                .discoveries;

        return discoveries.some(
            discovery => {

                if (
                    typeof discovery === "string"
                ) {

                    return discovery === id;

                }

                return discovery.id === id;

            }
        );

    }


    discover(id, context = {}) {

        const definition =
            this.getDefinition(id);

        if (!definition) {

            return null;

        }

        if (this.has(id)) {

            return null;

        }

        const record = {

            id: id,

            discoveredAt:
                new Date().toISOString(),

            method:
                context.method || "unknown",

            location:
                context.location || null

        };

        this.worldState
            .get("collections")
            .discoveries
            .push(record);

        this.eventBus.publish(
            "discovery_made",
            {
                discovery: definition,
                record: record
            }
        );

        return record;

    }


    getDiscoveredIds() {

        return this.worldState
            .get("collections")
            .discoveries
            .map(
                discovery => {

                    if (
                        typeof discovery === "string"
                    ) {

                        return discovery;

                    }

                    return discovery.id;

                }
            );

    }

}