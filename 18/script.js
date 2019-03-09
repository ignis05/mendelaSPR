function xd() {
    var that = document.getElementsByClassName("klasa")[0]
    var w = window.getComputedStyle(that).getPropertyValue("width")
    var h = window.getComputedStyle(that).getPropertyValue("height")
    that.innerText = `{${w}/${h}}`
}
