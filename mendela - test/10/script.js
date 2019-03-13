window.onload = function() {
    let p = Array.from(document.getElementsByTagName('p'))
    for (let i in p) {
        p[i].addEventListener('mouseenter', function() {
            p[i].style.fontWeight = 900
        })
    }

}