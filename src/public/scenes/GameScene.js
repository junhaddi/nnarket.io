import io from 'socket.io-client';
import logo from '../assets/spr_logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    const socket = io();
    this.add.image(400, 300, 'logo');
  }
}
