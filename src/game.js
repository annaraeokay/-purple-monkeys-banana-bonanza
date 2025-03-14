const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('pip', 'assets/pip.png'); // Will load your monkey image
}

function create() {
    this.add.image(400, 300, 'pip').setScale(0.5); // Place Pip in the center
}

function update() {
    // Game loop logic goes here
}

