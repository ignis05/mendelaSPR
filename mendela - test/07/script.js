window.onload = function() {
    document.getElementById('formularz').children[1].type = 'button'
    document.getElementById('formularz').children[1].addEventListener('click', function() {
        window.open('http://' + document.getElementById('formularz').children[0].value)
    })
}