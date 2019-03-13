window.onload = function() {
    let x = window.prompt('ile elementów utworzyć?')
    for (let i = 0; i < x; i++) {
        let div = document.createElement('div')
        div.className = 'klasa'
        document.body.append(div)
    }
}