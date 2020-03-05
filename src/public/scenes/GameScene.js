import "phaser";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    preload() {
        this.load.setBaseURL("static/public");
        this.load.image("logo", "assets/spr_logo.png");
    }

    create() {
        this.add.image(400, 300, "logo");
    }
}
