import Scene from './src/scene.js'
import View from './src/view.js'
import Game from './src/game.js'
import Sprite from './src/sprite.js'
import levels from './data/levels.js'

let $ = (id) => {
    return document.getElementById(id)
};

const canvas = $('canvas')
const sprite = new Sprite('./assets/sprites.png')

const game = new Game ({
    scene: new Scene(),
    view: new View(canvas, sprite),
    levels: levels
})

game.init().then(()=> game.start())



// const SPIN = new function () {
//     let SPIN = this,
//         cnv, ctx, width, height,
//         nodes = [],
//         node_count = 0,
//         for_destroy = {},
//         down_keys = {},
//         timer = 0,
//         user_draw;
//
//
//     SPIN.set_draw = (f) => {
//         user_draw = f;

    // }


    // SPIN.create_node = (x, y, w, h, clr, upd) => {
    //     return new Node(x, y, w, h, clr, upd);
    // };

    // SPIN.draw_text = (x,y,clr,_text) => {
    //     text(x,y,clr,_text);
    // }


    ///////////////////////////////////////

    // SPIN.key = (key) => {
    //     return down_keys[key];
    // }

// }

// window.addEventListener('load', function () {

    // SPIN.start(640, 480);
    // let enemies = [], score = 0;

    // let enemy_ai = (node) => {
    //     node.y += 0.1
    // }
    //
    // let bullet_ai = (node) => {
    //     node.y -= 5;
    //     if (node.y + node.h < 0) {
    //         node.destroy();
    //     }
    //     for (let i = enemies.length - 1; i >= 0; i--) {
    //         if (node.intersect(enemies[i])) {
    //             enemies[i].destroy();
    //             node.destroy();
    //             enemies.splice(i, 1);
    //             score +=1;
    //             break;
    //         }
    //     }
    //
    // }

    // for (let j = 0; j < 3; j++) {
    //     for (let i = 0; i < 10; i++) {
    //         enemies.push(SPIN.create_node(30 + (20 + 40) * i, 20 + (20 + 40) * j, 40, 40, '#ff6d5a', enemy_ai))
    //     }
    // }

    // let fire = (x, y) => {
    //     if (SPIN.get_timer() > 20) {
    //         SPIN.create_node(x, y, 10, 20, '#2de009', bullet_ai);
    //         SPIN.clear_timer();
    //     }
    // }

    // SPIN.create_node(, (node) => {
    //     if (SPIN.key('Numpad4'))
    //         node.x -= 1;
    //     if (SPIN.key('Numpad6'))
    //         node.x += 1;
    //     if (SPIN.key('Space'))
    //         fire(node.x + (50 / 2) - (10 / 2), node.y);
    //
    // })

    // SPIN.set_draw((s) => {
    //     s.draw_text((640/2-60),5,'#7aef63', 'Игровой счет:'+score)
    // })
// })