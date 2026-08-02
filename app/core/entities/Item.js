class Item extends Entity {

    constructor(data) {

        super(data);

        this.category =
            data.category || "General";

        this.stackable =
            data.stackable ?? false;

        this.quantity =
            data.quantity ?? 1;

        this.maxStack =
            data.maxStack ?? 1;

        this.rarity =
            data.rarity || "Common";

        this.tier =
            data.tier ?? 1;

        this.weight =
            data.weight ?? 0;

        this.value =
            data.value ?? 0;

        this.description =
            data.description || "";

        this.properties =
            data.properties || {};

    }



    getData() {

        return {

            ...super.getData(),

            category: this.category,

            stackable: this.stackable,

            quantity: this.quantity,

            maxStack: this.maxStack,

            rarity: this.rarity,

            tier: this.tier,

            weight: this.weight,

            value: this.value,

            description: this.description,

            properties: this.properties

        };

    }

}