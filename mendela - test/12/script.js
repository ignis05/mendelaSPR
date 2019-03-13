window.onload = function() {
    let divs = Array.from(document.getElementsByTagName('div'))
    for (let i in divs) {
        divs[i].addEventListener('click', function(e) {
            let posX = e.clientX - parseInt(window.getComputedStyle(divs[i]).marginLeft.slice(0, -2)) - 8
            let width = parseInt(window.getComputedStyle(divs[i]).width.slice(0, -2))
            console.log(posX)
            console.log(width)
            divs[i].style.backgroundColor = 'rgb(' +  (255 - 255 * posX/width) + ', ' + (255 - 255 * posX/width) + ', ' + (255 - 255 * posX/width) + ')'
        })
    }
}