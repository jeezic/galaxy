import {Unit} from "./Unit.js";

export class Enemy extends Unit {

    speedY = 0.1
    speed = .5
    speedX = .5


    constructor(x, y, w, h, clr = '#ffffff') {
        super(x, y, w, h, clr = '#ffffff');

        this.leftEdge = this.x - 10
        this.rightEdge = this.x + 10
        this.topEdge = this.y - 10
        this.bottomEdge = this.y + 200
    }

    update(view) {

        if (this.x <= this.leftEdge) {
            this.speedX = -this.speedX;
        } else if (this.x >= this.rightEdge + this.w) {
            this.speedX = -this.speedX;
        }

        if (this.y + this.h >= this.bottomEdge) {
            //this.speed += 0.3;
            this.speedY = -Math.abs(this.speedY) * 2;
        } else if (this.y <= this.topEdge) {
            //this.speed += 0.3;
            this.speedY = Math.abs(this.speedY) * 2;
        }

        if (this.speedY > 2) {
            this.speedY = 0.5
        } else if (this.speedY < -2) {
            this.speedY = -0.5
        }

        this.x += this.speedX
        this.y += this.speedY


        view.rect(this.x, this.y, this.w, this.h, this.clr)
    }

}
