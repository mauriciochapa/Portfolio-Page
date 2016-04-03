function collision() {
    //since the number of enemies might change, sometimes 3, maybe 4,5 or 6, depending on difficulty
    for (var i = 0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + allEnemies[i].w &&
            player.x + player.w > allEnemies[i].x &&
            player.y < allEnemies[i].y + allEnemies[i].h &&
            player.y + player.h > allEnemies[i].y) {
            //if collision it sends the player back to start
            player.y = 400;
        }
    }
}

//equation to generate a random intiger for speed
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Enemies our player must avoid
var Enemy = function(pos) {
    //Loading the image by setting this.sprite to the appropriate image in the image folder
    this.sprite = 'images/enemy-bug.png';
    //setting the enemy initial location
    this.x = getRandom(0, 400);
    this.y = pos;
    this.w = 73;
    this.h = 83;
    //setting the enemy speed
    this.speed = getRandom(100, 200);
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //Updates the Enemy location
    this.x = this.speed * dt + this.x;
    if (this.x > 505 ) {
        this.x = -100;
        this.speed = getRandom(100, 200);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    //Loading the image by setting this.sprite to the appropriate image in the image folder 
    this.sprite = 'images/char-boy.png';
    //Setting the Player initial location
    this.x = 202;
    this.y = 400;
    this.w = 50;
    this.h = 50;
};

Player.prototype.update = function() {
    // update method for the Player 
    //check if he got hit by a bug
    collision();
    //if you win reset to original location
    if (this.y < 67) {
        this.y = 400;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(toggle) {
    //movement limits for player
    if (toggle === 'left') {
        //check if player is already in the left edge
        if (this.x === 0) {
        //if true stay there   
            this.x = 0;
        } else {
        //else move to the left by 1/5th of the canvas width
            this.x = this.x - 101;
        }
    }
    if (toggle === 'right') {
        //check if player is already in the right edge
        if (this.x === 404) {
            this.x = 404;
        } else {
            this.x = this.x + 101;
        }
    }
    if (toggle === 'down') {
        //check if player is already in the bottom edge
        if (this.y === 400) {
            this.y = 400;
        } else {
            this.y = this.y + 83;
        }
    }
    if (toggle === 'up') {
        //prototype update already sends the player to the 
        //bottom so need to add condition for it
        this.y = this.y - 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [
    //top enemy
    new Enemy(60),
    //middle enemy
    new Enemy(143),
    //bottom enemy
    new Enemy(226),
    //if you want to add more enemies replicate those lines
];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});