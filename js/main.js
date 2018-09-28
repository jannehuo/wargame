import 'phaser'
import { MainScene } from './scenes/main-scene';

const gameConfig = {
  width: 1024,
  height: 768,
  scene: MainScene
};

new Phaser.Game(gameConfig);