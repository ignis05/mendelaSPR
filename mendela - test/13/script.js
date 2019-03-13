window.onload = function() {
    document.getElementsByTagName('img')[0].addEventListener('click', function() {
        window.alert(document.getElementsByTagName('img')[0].src)
    })
}