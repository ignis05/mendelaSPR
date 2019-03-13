window.onload = function() {
    let name = window.prompt('podaj imie i nazwisko')

    let div0 = document.createElement('div')
    div0.innerText = name.split(' ')[0]
    document.body.append(div0)
    div0.addEventListener('click', function() {
        window.alert('Twoje imię to: ' + div0.childNodes[0].nodeValue)
    })

    let div1 = document.createElement('div')
    div0.append(div1)
    div1.innerText = name.split(' ')[1]
    div1.addEventListener('click', function(e) {
        e.stopPropagation()
        window.alert('Twoje nazwisko to: ' + div1.innerText)
    }, false)
}