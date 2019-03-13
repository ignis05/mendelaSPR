window.onload = function() {
    let div = document.getElementsByClassName('klasa')[0]
    div.addEventListener('click', function() {
        let width = window.getComputedStyle(div).width
        let height = window.getComputedStyle(div).height
        div.innerHTML = '{' + width + '/' + height + '}'
    })
}