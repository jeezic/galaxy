import {Layer} from "../shared/ui/Layer.js";
import {UserInput} from "../shared/io/UserInput.js";
import {GameLoop} from "../shared/runtime/GameLoop.js";
import {Scene} from "./Scene.js";
import {View} from "./View.js";
import {Sprite} from "../shared/io/Sprite.js";

export class App {
    constructor(container) {
        this.mainLayer = new Layer(container)
        this.userInput = new UserInput({keyList: ['ArrowLeft', 'ArrowRight', 'Space']})

        this.scene = new Scene()
        this.sprite = new Sprite('../../assets/sprites.png')
        this.view = new View(this.mainLayer.canvas, this.sprite)

        this.update = this.update.bind(this)

        this.init()
    }

    init() {
        this.scene.init()
        this.view.init()
        new GameLoop(this.update, this.render)
    }

    update(correction) {
        this.scene.update(this.userInput, correction)
        this.view.update(this.scene)
    }


}
