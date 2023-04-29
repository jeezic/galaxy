import {Unit} from "./Unit.js";

export default class Player extends Unit{

    speed = 2

    update(view) {
        view.rect(this.x, this.y, this.w, this.h, this.clr)
    }

    intersect(node) {
        return !(this.x + this.w < node.x || this.y + this.h < node.y || node.x + node.w < this.x || node.y + node.h < this.y);
    }

}
