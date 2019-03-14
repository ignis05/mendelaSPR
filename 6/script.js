document.addEventListener("DOMContentLoaded", () => {
    var x = "30"
    var rand = ~~(Math.random() * 11)
    var sum = ~~x + rand
    document.getElementsByTagName("input")[1].value = sum
})