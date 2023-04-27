export default class Node {
   constructor(x, y, w, h, clr) {
        //this.id = node_count++;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.clr = clr;
   }

    _update() {
        if (this.update && typeof this.update === 'function')
            this.update(this);
    }

    render(view) {
        view.rect(this.x, this.y, this.w, this.h, this.clr)
    }

    move(x, y) {
        this.x += x;
        this.y += y;

    }

    destroy() {
        //for_destroy[this.id] = this;
    }

    intersect(node) {
        return !(this.x + this.w < node.x || this.y + this.h < node.y || node.x + node.w < this.x || node.y + node.h < this.y);
    }

}