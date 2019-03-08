document.addEventListener("DOMContentLoaded", () => {
    var x = "30"
    var rand = Math.floor(Math.random() * 10) + 1
    var sum = parseInt(x) + rand
    document.getElementsByTagName("input")[1].value = sum
})