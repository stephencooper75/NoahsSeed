class SceneRenderer {

    constructor(
        gardenRenderer,
        wildlifeRenderer
    ) {

        this.gardenRenderer =
            gardenRenderer;

        this.wildlifeRenderer =
            wildlifeRenderer;

    }

    render() {

        return (

            this.wildlifeRenderer.render()

            +

            this.gardenRenderer.render()

        );

    }

}