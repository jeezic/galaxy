export class Unit {

    constructor(x, y, w, h, clr = '#ffffff') {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.clr = clr;
    }

    update(view) {

    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    intersect(unit) {
        return !(this.x + this.w < unit.x || this.y + this.h < unit.y || unit.x + unit.w < this.x || unit.y + unit.h < this.y);

    }

}
