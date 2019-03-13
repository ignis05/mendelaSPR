window.onload = function() {
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault()
        let div = document.createElement('div')
        div.innerHTML = 'Nie skopiujesz!'
        div.style.border = '2px solid black'
        div.style.padding = '5px'
        div.style.position = 'absolute'
        div.style.left = e.clientX + 'px'
        div.style.top = e.clientY + 'px'
        document.body.append(div)
        setTimeout(function() {
            document.body.removeChild(div)
        }, 5000)
    }, false)
    document.oncontextmenu = function() {
        return false
    }
}