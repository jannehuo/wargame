import soldierMovement from './soldierMove';
import soldierRotation from './soldierRotation';
import soldierShoot from './soldierShoot';
let wasd;
let soldier;

export class MainScene extends Phaser.Scene {
  preload() {
    const spritesheetConfigs = {
      'soldier-move': {
        frameWidth: 258,
        frameHeight: 220,
        endFrame: 19
      },
      'soldier-shoot': {
        frameWidth: 255,
        frameHeight: 215,
        endFrame: 2
      },
      'soldier-reload': {
        frameWidth: 260,
        frameHeight: 230,
        endFrame: 14
      },
      'soldier-idle': {
        frameWidth: 253,
        frameHeight: 216,
        endFrame: 19
      }
    }

    this.load.spritesheet('soldier-move','/assets/sheets/move.png', spritesheetConfigs['soldier-move']);
    this.load.spritesheet('soldier-shoot','/assets/sheets/shoot.png', spritesheetConfigs['soldier-shoot']);
    this.load.spritesheet('soldier-reload','/assets/sheets/reload.png', spritesheetConfigs['soldier-reload']);
    this.load.spritesheet('soldier-idle','/assets/sheets/idle.png', spritesheetConfigs['soldier-idle']);

    wasd = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    };
  }
  create() {
    const middleX = this.game.config.width / 2;
    const middleY = this.game.config.height / 2;
    const startAngle = -90;

    const move = this.anims.create(
      {
        key: 'move',
        frames: 'soldier-move',
        frameRate: 40,
        repeat: -1
      }
    );

    const shoot = this.anims.create(
      {
        key: 'shoot',
        frames: 'soldier-shoot',
        frameRate: 15,
        repeat: 0
      }
    );

    const idle = this.anims.create(
      {
        key: 'idle',
        frames: 'soldier-idle',
        frameRate: 10,
        repeat: -1
      }
    );

    const reload = this.anims.create(
      {
        key: 'reload',
        frames: 'soldier-reload',
        frameRate: 40,
        repeat: 0
      }
    );
    
    soldier = this.add.sprite(middleX,middleY,'soldier-move');
    soldier.angle = startAngle;
    soldier.shooting = false;

    this.input.on('pointerdown', (pointer) => {
      soldier.shooting = true;
    });

    this.input.on('pointerup', (pointer) => {
      soldier.shooting = false;
    });

  }
  update() {
    soldierMovement(soldier,wasd);
    
    this.input.on('pointermove', (pointer) => {
      soldierRotation(pointer, soldier);
    });
  }
  render() {
    
  }
}