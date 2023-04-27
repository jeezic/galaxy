export default class Game {

    constructor({scene, view, levels}) {
        this.scene = scene
        this.view = view
        this.levels = levels

        this.loop = this.loop.bind(this)
        this.timer = 0;

        this.down_keys = new Set()
    }

    clear_timer() {
        this.timer = 0;
    }

    get_timer() {
        return this.timer;
    }

    // fire(x, y) {
    //     if (this.get_timer() > 20) {
    //         SPIN.create_node(x, y, 10, 20, '#2de009', bullet_ai);
    //         this.clear_timer();
    //     }
    // }

    async init() {
        await this.view.init()

         window.addEventListener('keydown', (e) => {
             this.down_keys.add(e.code);
         });
         window.addEventListener('keyup', (e) => {
             this.down_keys.delete(e.code);
         })

    }

    start() {
        requestAnimationFrame(this.loop);
    };

    loop() {

        this.scene.update(this.down_keys, this.timer)
        this.view.update(this.scene)

        requestAnimationFrame(this.loop);
        this.timer++;
    }
}