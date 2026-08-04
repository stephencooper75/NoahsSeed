/**
 * --------------------------------------------------------
 * Noah Engine
 * UIWindow
 * --------------------------------------------------------
 */

class UIWindow {

    constructor(id) {

        this.id = id;

    }

    open(html) {

        const panel =
            document.getElementById("experienceWindow");

        panel.innerHTML = html;

        panel.style.display = "block";

    }

    close() {

        document.getElementById(
            "experienceWindow"
        ).style.display = "none";

    }

}

window.UIWindow = UIWindow;