window.onload = function() {
    let input = document.getElementsByTagName('input')[0]
    input.value = 'wyszukaj w google'
    input.addEventListener('click', function() {
        location.href = 'http://google.com'
    })
}