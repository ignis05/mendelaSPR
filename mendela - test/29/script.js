class Kolo {
    constructor(speed) {
        this.speed = speed
        this.elem
    }

    wstaw() {
        let div = document.createElement('img')
        div.style.position = 'absolute'
        div.style.left = Math.random() * (window.outerWidth - 100) + 'px'
        div.style.top = Math.random() * (window.outerHeight - 150) + 'px'
        div.src = 'round.png'
        this.elem = div
        document.body.append(div)
    }

    obracaj() {
        this.elem.className = 'rotating'
        this.elem.style.animationDuration = this.speed + 's'
    }
}

window.onload = function() {
    setInterval(function() {
        let temp = new Kolo(Math.random() * 2)
        temp.wstaw()
        temp.obracaj()
    }, 2000)
}