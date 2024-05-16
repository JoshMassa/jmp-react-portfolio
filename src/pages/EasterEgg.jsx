import React, { useEffect, useState } from 'react';
import '../styles/EasterEgg.css';
import backgroundImage from '../assets/background-single.png';
import playerImage from '../assets/player.png';
import enemyImage from '../assets/enemy-1.png';

function runGame(setResetGameCallback, setScoreCallback) {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 720;
    let enemies = [];
    let score = 0;
    let gameOver = false;
    let animationFrameId;

    function resetGame() {
        enemies = [];
        score = 0
        setScoreCallback(0);
        gameOver = false;
        player.x = 0;
        player.y = player.gameHeight - player.height;
        lastTime = 0;
        enemyTimer = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrameId);
        animate(0);
    }

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if ((   e.key === 'ArrowDown' ||
                        e.key === 'w' ||
                        e.key === 'a' ||
                        e.key === 'd')
                        && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
                if (e.key === ' ' && gameOver) {
                    resetGame();
                }
            });
            window.addEventListener('keyup', e => {
                if (    e.key === 'ArrowDown' ||
                        e.key === 'w' ||
                        e.key === 'a' ||
                        e.key === 'd') {
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            });
        }
    }

    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = this.gameHeight - this.height;
            this.image = document.getElementById('playerImage');
            this.frameX = 0;
            this.maxFrame = 8;
            this.frameY = 0;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 0;
            this.vy = 0;
            this.weight = 0.1;
        }
        draw(context) {
            context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(input, deltaTime, enemies) {
            // Collision Detection
            enemies.forEach(enemy => {
                const dx = (enemy.x + enemy.width / 2) - (this.x + this.width / 2);
                const dy = (enemy.y + enemy.height / 2) - (this.y + this.height / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < enemy.width / 2 + this.width / 2) {
                    gameOver = true;
                }
            });
            // Sprite Animation
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }
            // Controls
            if (input.keys.indexOf('d') > -1) {
                this.speed = 2;
            } else if (input.keys.indexOf('a') > -1) {
                this.speed = -2;
            } else {
                this.speed = 0;
            }
            if (input.keys.indexOf('w') > -1 && this.onGround()) {
                this.vy -= 10;
            }
            // Horizontal Movement
            this.x += this.speed;
            if (this.x < 0) this.x = 0;
            else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;
            // Vertical Movement
            this.y += this.vy;
            if (!this.onGround()) {
                this.vy += this.weight;
                this.maxFrame = 5;
                this.frameY = 1;
            } else {
                this.vy = 0;
                this.maxFrame = 8;
                this.frameY = 0;
            }
            if (this.y > this.gameHeight - this.height) this.y = this.gameHeight - this.height;
        }
        onGround() {
            return this.y >= this.gameHeight - this.height;
        }
    }

    class Background {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.image = document.getElementById('backgroundImage');
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 720;
            this.speed = 0.7;
        }
        draw(context) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            context.drawImage(this.image, this.x + this.width - 3, this.y, this.width, this.height);
        }
        update() {
           this.x -= this.speed;
           if (this.x < 0 - this.width) this.x = 0;
        }
    }

    class Enemy {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 160;
            this.height = 119;
            this.image = document.getElementById('enemyImage');
            this.x = this.gameWidth;
            this.y = Math.random() * (this.gameHeight - this.height);
            this.frameX = 0;
            this.maxFrame = 5;
            this.fps = 20;
            this.frameTimer = 0;
            this.frameInterval = 1000 / this.fps;
            this.speed = 2;
            this.markedForDeletion = false;
        }
        draw(context) {
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        update(deltaTime) {
            if (this.frameTimer > this.frameInterval) {
                if (this.frameX >= this.maxFrame) this.frameX = 0;
                else this.frameX++;
                this.frameTimer = 0;
            } else {
                this.frameTimer += deltaTime;
            }
            this.x -= this.speed;
            if (this.x < 0 - this.width) {
                this.markedForDeletion = true;
                score++;
                setScoreCallback(score);
            }
        }
    }

    function handleEnemies(deltaTime) {
        if (enemyTimer > enemyInterval + randomEnemyInterval) {
            enemies.push(new Enemy(canvas.width, canvas.height));
            randomEnemyInterval = Math.random() * 1000 + 500;
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }
        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update(deltaTime);
        });
        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
    }

    function displayStatusText(context) {
        context.font = '35px Helvetica';
        if (gameOver) {
            context.textAlign = 'center';
            context.fillStyle = 'black';
            context.fillText('GAME OVER!', canvas.width / 2, 150);
            context.fillStyle = 'black';
            context.fillText('Don\'t touch the enemies!', canvas.width / 2, 200);
            context.fillStyle = 'white';
            context.fillText('GAME OVER!', canvas.width / 2 + 2, 152);
            context.fillStyle = 'white';
            context.fillText('Don\'t touch the enemies!', canvas.width / 2 + 2, 202);
            context.fillStyle = 'black';
            context.fillText('(Press Spacebar To Restart)', canvas.width / 2, 250);
            context.fillStyle = 'white';
            context.fillText('(Press Spacebar To Restart)', canvas.width / 2 + 2, 252);
        }
    }

    const input = new InputHandler();
    const player = new Player(canvas.width, canvas.height);
    const background = new Background(canvas.width, canvas.height);

    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background.draw(ctx);
        background.update();
        player.draw(ctx);
        player.update(input, deltaTime, enemies);
        handleEnemies(deltaTime);
        displayStatusText(ctx);
        if (!gameOver) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            displayStatusText(ctx);
        }
    }
    animate(0);

    if (setResetGameCallback) {
        setResetGameCallback(() => resetGame);
    }

    return resetGame;
};

function EasterEgg() {
    const [resetGame, setResetGame] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        runGame(setResetGame, setScore);
    }, []);

    return (
        <div className='game-wrapper'>
            <div className='game-container'>
                <canvas id='canvas1'></canvas>
                <div className='score'>Score: {score}</div>
                <img src={playerImage} id='playerImage' alt='Player Image' />
                <img src={backgroundImage} id='backgroundImage' alt='Background Image' />
                <img src={enemyImage} id='enemyImage' alt='Enemy Image' />
            </div>
        </div>
    );
}

export default EasterEgg;