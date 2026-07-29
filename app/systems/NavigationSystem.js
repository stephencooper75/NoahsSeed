class NavigationSystem {

    constructor() {

        this.screens = {};
        this.currentScreen = null;

    }

    register(screenId) {

        const screen = document.getElementById(screenId);

        if (!screen) {
            console.warn(`Screen "${screenId}" was not found.`);
            return;
        }

        this.screens[screenId] = screen;

    }

    show(screenId) {

        for (const id in this.screens) {
            this.screens[id].classList.add("hidden");
        }

        if (!this.screens[screenId]) {
            console.warn(`Screen "${screenId}" is not registered.`);
            return;
        }

        this.screens[screenId].classList.remove("hidden");

        this.currentScreen = screenId;

    }

    getCurrentScreen() {

        return this.currentScreen;

    }

}