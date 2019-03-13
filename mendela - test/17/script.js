window.onload = function() {
    let but = document.getElementsByTagName('button')[0]
    let input = document.getElementsByName('znak')[0]

    but.addEventListener('click', function() {
        input.value = String.fromCharCode(Math.random() * (91 - 65) + 65)
    })
}