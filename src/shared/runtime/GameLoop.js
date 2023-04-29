export class GameLoop {
    constructor(_update) {
        this.update = _update
        this.init()

    }

    init(){
        this.deltaTime = 0
        this.lastUpdate = 0
        this.maxInterval = 40
        this.animate = this.animate.bind(this)

        requestAnimationFrame(stampTime => this.animate(stampTime))
    }

    animate(currentTime) {

        requestAnimationFrame(stampTime => this.animate(stampTime))

        this.deltaTime = currentTime - this.lastUpdate

        if (this.deltaTime < this.maxInterval) {
            this.update(this.deltaTime / 1000)
        }

        this.lastUpdate = currentTime

    }
}
