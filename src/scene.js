import Node from './node.js'

export default class Scene {

    player1 = new Node((640 / 2 - 50 / 2), 480 - 50 - 30, 50, 50, '#64c858')
    player2 = null
    enemies = []
    bullets = []
    score = 0

    constructor() {
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 10; i++) {
                this.enemies.push(new Node(30 + (20 + 40) * i, 20 + (20 + 40) * j, 40, 40, '#ff6d5a'))
            }
        }
    }

    enemy_ai(node) {
        node.y += 0.1
    }

    bullet_ai(node, bullet_index) {
        node.y -= 5;
        if (node.y + node.h < 0) {
            this.bullets.splice(bullet_index, 1)
            node.destroy();
        }
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            if (node.intersect(this.enemies[i])) {
                this.enemies[i].destroy();
                node.destroy();
                this.enemies.splice(i, 1);
                this.score += 1;
                break;
            }
        }

    }


    update(down_keys, timer) {

        if (down_keys.has('ArrowLeft')) {
            this.player1.x -= 1
        }
        if (down_keys.has('ArrowRight')) {
            this.player1.x += 1
        }
        if (down_keys.has('Space')) {
            console.log('FIRE:' + timer)
            if (timer>20) {

                this.bullets.push(new Node(this.player1.x, this.player1.y, 10, 20, '#2de009'))
                timer = 0

            }

        }
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            this.enemy_ai(this.enemies[i], i)
        }
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullet_ai(this.bullets[i])
        }
    }

}