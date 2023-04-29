import {Unit} from "./Unit.js";

export default class Bullet extends Unit {

    update(view) {
        this.y -= this.speed
        view.rect(this.x, this.y, this.w, this.h, this.clr)
        if (this.y <= -this.h || this.y >= view.height ){
            return true
        }
    }

    shot(x, y, speed){
        this.x = x
        this.y = y
        this.speed = speed
    }

}
