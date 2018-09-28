import soldierMovement from './soldierMove';
import solderiRotation from './soldierRotation';
let wasd;
let soldier;

export class MainScene extends Phaser.Scene {
  preload() {
    const spritesheetConfigs = {
      'soldier-move': {
        frameWidth: 258,
        frameHeight: 220,
        endFrame: 19
      }
    }
    this.load.spritesheet('soldier-move','/assets/sheets/move.png',spritesheetConfigs['soldier-move']);
    wasd = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    };
  }
  create() {
    const middleX = this.game.config.width / 2;
    const middleY = this.game.config.height / 2;
    const startAngle = -90;
    this.anims.create({
      key: 'move',
      frames: 'soldier-move',
      frameRate: 40,
      repeat: -1
    });

    soldier = this.add.sprite(middleX,middleY,'soldier-move');
    soldier.angle = startAngle;
    console.log(this);
    console.log(this.input);
  }
  update() {
    soldierMovement(soldier,wasd);
    this.input.on('pointermove', (pointer) => {
      solderiRotation(pointer, soldier);
    });
  }
}