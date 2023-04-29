import {Unit} from "./Unit.js";

export class Player extends Unit{

    speed = 2

    update(view) {
        view.rect(this.x, this.y, this.w, this.h, this.clr)
    }

}
