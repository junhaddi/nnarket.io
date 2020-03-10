const config = {
  autoFocus: false,
  type: Phaser.HEADLESS,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {}

function create() {
  io.on('connection', socket => {
    console.log('a player connected');

    socket.on('disconnect', () => {
      console.log('player disconnected');
    });
  });
}

function update() {}

window.gameLoaded();
