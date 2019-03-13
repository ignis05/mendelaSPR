window.onload = function() {
    let input = document.getElementsByTagName('input')
    input[1].addEventListener('focus', function() {
        input[1].style.backgroundColor = '#888888'
    })
    input[1].addEventListener('blur', function() {
        input[1].removeAttribute('style')
    })
}