export class View {
    constructor(canvas, sprite) {
        this.canvas = canvas
        this.sprite = sprite
        this.context = canvas.getContext('2d')

        this.width = 640;
        this.height = 480;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context.textBaseline = 'top';
        this.context.font='20px Arial';
    }

    rect(x, y, w, h, clr) {
        this.context.fillStyle = clr;
        this.context.fillRect(x, y, w, h);
    }

    text(x, y, clr, text) {
        this.context.fillStyle = clr;
        this.context.fillText(text, x, y);
    }

    async init() {
        await this.sprite.load()
    }

    update(scene) {

        this.context.clearRect(0, 0, this.width, this.height);
        for (let i = scene.enemies.length - 1; i >= 0; i--) {
            scene.enemies[i].render(this);
        }


        for (let i = scene.bullets.length - 1; i >= 0; i--) {
            scene.bullets[i].render(this);
        }

        this.text((this.width/2-this.width/10),5,'#7aef63', 'Игровой счет:'+scene.score)

        this.renderPlayer1(scene.player1)

    }

    renderPlayer1(player1){
        player1.render(this)
    }



}
