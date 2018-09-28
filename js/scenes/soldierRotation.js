export default (pointer,soldier) => {
    let angle = Phaser.Math.Angle.Between(soldier.x, soldier.y,pointer.x,pointer.y);
    soldier.angle = angle * (180 / Math.PI);
} 