const movementSpeed = 2;

export default (soldier, wasd) => {
    const up = wasd.up.isDown;
    const down = wasd.down.isDown;
    const left = wasd.left.isDown;
    const right = wasd.right.isDown;
    
    if(up || down || left || right) {
        soldier.anims.play('move',true);
    }

    if(up) {
        soldier.y -= movementSpeed;
        if(left) {
            soldier.x -= movementSpeed;
        }
        if(right) {
            soldier.x += movementSpeed;
        }
    } else if(down) {
        soldier.y += movementSpeed;
        if(left) {
            soldier.x -= movementSpeed;
        }
        if(right) {
            soldier.x += movementSpeed;
        }
    } else if(left) {
        soldier.x -= movementSpeed;
    } else if(right) {
        soldier.x += movementSpeed;
    } else {
        soldier.anims.stop(null,true);
    }
}