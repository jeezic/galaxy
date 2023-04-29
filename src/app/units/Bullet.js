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

    intersect(Drawable) {
        return !(this.x + this.w < Drawable.x || this.y + this.h < Drawable.y || Drawable.x + Drawable.w < this.x || Drawable.y + Drawable.h < this.y);
    }

}
