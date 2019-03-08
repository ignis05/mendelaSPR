document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByTagName("input")[1].onfocus = function () { this.style.background = "#888888" }
    document.getElementsByTagName("input")[1].onblur = function () { this.style.background = "white" }
})
