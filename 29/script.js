class Koło {
    constructor(speed) {
        this.speed = speed
        this.DOM = null
        this.wstaw()
        this.obracaj()
    }
    wstaw() {
        this.DOM = new Image()
        this.DOM.src = "./round.png"
        this.DOM.style.position = "fixed"
        var x = Math.floor(Math.random() * (window.innerWidth - 50))
        var y = Math.floor(Math.random() * (window.innerHeight - 50))
        this.DOM.style.left = x + "px"
        this.DOM.style.top = y + "px"
        document.body.append(this.DOM)
    }
    obracaj() {
        this.DOM.classList.add("rotating")
        this.DOM.style.animationDuration = this.speed + "s"
    }
}

window.addEventListener("load", () => {
    setInterval(()=>{
        let speed = Math.random() * 5
        new Koło(speed)
    },2000)
})