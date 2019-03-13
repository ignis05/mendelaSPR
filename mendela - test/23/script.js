window.onload = function() {
    let buts = Array.from( document.getElementsByTagName('button') )
    for (let i in buts) {
        buts[i].innerHTML = parseInt(i) + 1
    }
}