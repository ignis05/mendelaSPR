window.onload = function() {
    let divs = Array.from(document.getElementsByTagName('div'))
    for (let i in divs) {
        divs[i].addEventListener('click', function() {
            this.style.backgroundColor = '#00F'
            this.style.height = parseInt(this.style.height.slice(0, -2)) / 2 + 'px'
        })
    }
}