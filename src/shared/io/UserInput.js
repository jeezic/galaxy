export class UserInput {
    constructor({keyList}) {
        this.keyList = keyList
        this.keys = {}
        this.init()

    }
    init(){
        addEventListener('keydown', (e) => this.changeKeyState(e))
        addEventListener('keyup', (e) => this.changeKeyState(e))
    }

    changeKeyState(e){
        if (!this.keyList.includes(e.code)) return
        this.keys[e.code] = e.type === 'keydown'
    }

    hasKeys(...args) {
        return Array.isArray(args) ?
            args.some(key => this.keys[key]) :
            this.keys[args];
    }
}
