function xd() {
    var that = document.getElementsByClassName("klasa")[0]
    var w = that.clientWidth
    var h = that.clientHeight
    that.innerText = `{${w}/${h}}`
}
