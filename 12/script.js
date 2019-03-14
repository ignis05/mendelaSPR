document.addEventListener("DOMContentLoaded", () => {
    var divs = document.getElementsByTagName("div")
    Object.values(divs).forEach(div => {
        div.onmousedown = function (e) {
            var mouseX = e.pageX - div.clientLeft;
            var width = this.clientWidth
            var relX = mouseX / width
            var col = 255 - (255 * relX)
            this.style.background = `rgb(${col},${col},${col})`
        }
    });
})
