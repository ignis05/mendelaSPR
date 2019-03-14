document.addEventListener("DOMContentLoaded", () => {
    var divs = document.getElementsByTagName("div")
    Object.values(divs).forEach(div => {
        div.onmousedown = function (e) {
            var mouseX = e.pageX - div.offsetLeft;
            var width = window.getComputedStyle(this).width.slice(0, -2)
            var relX = mouseX / width
            var col = 255 - (255 * relX)
            this.style.background = `rgb(${col},${col},${col})`
        }
    });
})
