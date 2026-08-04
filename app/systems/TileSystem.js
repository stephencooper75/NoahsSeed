class TileSystem {

    constructor() {

        this.tiles = {};

    }

    key(x, y) {

        return `${x},${y}`;

    }

    createTile(
        x,
        y,
        terrain = "grass"
    ) {

        const tile =
            new Tile(
                x,
                y,
                terrain
            );

        this.tiles[
            this.key(x, y)
        ] = tile;

        return tile;

    }

    getTile(x, y) {

        return this.tiles[
            this.key(x, y)
        ];

    }

}