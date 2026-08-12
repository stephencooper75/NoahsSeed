class MusicStudio {

    constructor() {

        this.selectedInstrument = "piano";

        this.toolbar =
            new ToolbarRenderer();

        this.footer =
            new FooterRenderer();

        this.keyboard =
            new KeyboardRenderer();

        this.music =
            new MusicEngine();

        this.keyboardController =
            new KeyboardController(
                this.music
            );

        this.instrumentController =
            new InstrumentController(
                this
            );

        this.closeController =
            new CloseController();

    }

    render() {

        return `

<div class="musicStudio">

<h2>

🎵 Music Studio

</h2>

<p>

Choose an instrument.

</p>

${this.toolbar.render(

    this.selectedInstrument

)}

${this.keyboard.render()}

${this.footer.render()}

</div>

`;

    }

    bindEvents() {

        this.closeController.bind();

        this.keyboardController.bind();

        this.instrumentController.bind();

    }

    refresh() {

        const window =

            document.getElementById(
                "experienceWindow"
            );

        window.innerHTML =

            this.render();

        this.bindEvents();

    }

}