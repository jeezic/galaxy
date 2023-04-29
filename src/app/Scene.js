import {Player} from './units/Player.js'
import {Enemy} from './units/Enemy.js'
import {Bullet} from "./units/Bullet.js";

export class Scene {


    constructor() {
        this.init()
    }

    init() {

        this.player1 = new Player((640 / 2 - 50 / 2), 480 - 50 - 30, 50, 50, '#64c858')
        this.player2 = null
        this.enemies = []
        this.bullets = []
        this.score = 0
        this.timer = 0


        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 10; i++) {
                this.enemies.push(new Enemy(30 + (20 + 40) * i, 20 + (20 + 40) * j, 40, 40, '#ff6d5a'))
            }
        }
    }


    collisionDetection() {

        for (let ibullet = this.bullets.length - 1; ibullet >= 0; ibullet--) {

            let curBullet = this.bullets[ibullet]
            if (curBullet.y + curBullet.h < 0){
                this.bullets.splice(ibullet, 1);
                break;
            }

            for (let i = this.enemies.length - 1; i >= 0; i--) {
                if (curBullet.intersect(this.enemies[i])) {
                    this.enemies.splice(i, 1);
                    this.bullets.splice(ibullet, 1);
                    this.score += 1;
                    break;
                }
            }
        }

    }


    update(userInput, correction) {

        // console.log(correction)
        this.timer++

        if (userInput.hasKeys('ArrowLeft')) {
            this.player1.move(-300 * correction, 0)
        }
        if (userInput.hasKeys('ArrowRight')) {
            this.player1.move(300 * correction, 0)
        }
        if (userInput.hasKeys('Space')) {
            if (this.timer > 20) {
                let newBullet = new Bullet(this.player1.x + this.player1.w / 2 - 5, this.player1.y, 10, 20, '#2de009')
                this.bullets.push(newBullet)
                newBullet.shot(this.player1.x + this.player1.w / 2 - 5, this.player1.y, 5)
                this.timer = 0
            }
        }

        this.collisionDetection()

    }


}
