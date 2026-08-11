class WildlifeRenderer {

    constructor() {

        this.currentEvent = null;

    }

    show(event) {

        this.currentEvent = event;

    }

    clear() {

        this.currentEvent = null;

    }

    render() {

        if (!this.currentEvent) {

            return "";

        }

        return `
<div class="wildlifeOverlay">
    <div class="wildlifeCreature">
        ${this.currentEvent.icon}
    </div>
</div>
`;

    }

}