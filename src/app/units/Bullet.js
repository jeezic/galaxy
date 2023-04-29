import {Unit} from "./Unit.js";

export class Bullet extends Unit {

    update() {
        this.y -= this.speed

        // if (this.y <= -this.h || this.y >= view.height ){
        //     return true
        // }
    }

    render(view){
        view.rect(this.x, this.y, this.w, this.h, this.clr)
    }

    shot(x, y, speed){
        this.x = x
        this.y = y
        this.speed = speed
    }

}
