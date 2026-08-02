class Activity {

    constructor(data) {

        this.id =
            data.id;


        this.name =
            data.name || "";


        this.description =
            data.description || "";


        this.icon =
            data.icon || "";


        this.category =
            data.category || "";


        this.location =
            data.location || "";


        this.timeCost =
            data.timeCost ?? 0;


        this.requiredItems =
            data.requiredItems || [];


        this.requiredEntities =
            data.requiredEntities || [];


        this.requiredConditions =
            data.requiredConditions || {};


        this.outcomes =
            data.outcomes || {};


        this.rewards =
            data.rewards || {};


        this.adaptive =
            data.adaptive || {};

    }



    getData() {

        return {

            id: this.id,

            name: this.name,

            description: this.description,

            icon: this.icon,

            category: this.category,

            location: this.location,

            timeCost: this.timeCost,

            requiredItems: this.requiredItems,

            requiredEntities: this.requiredEntities,

            requiredConditions: this.requiredConditions,

            outcomes: this.outcomes,

            rewards: this.rewards,

            adaptive: this.adaptive

        };

    }

}