/**
 * Noah Engine
 * UI Capability
 */

class UICapability extends Capability {

    constructor() {

        super("UI");

        this.window =
            new UIWindow("main");

    }

    show(html) {

        this.window.open(html);

    }

    hide() {

        this.window.close();

    }

}

window.UICapability = UICapability;