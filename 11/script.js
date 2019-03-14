window.onload = () => {
    var divs = document.getElementsByTagName("div")
    Object.values(divs).forEach(div => {
        div.onclick = function () {
            var hi = this.style.height.slice(0, -2) / 2
            this.style.height = hi + "px"
            this.style.background = "blue"
        }
    });
}
