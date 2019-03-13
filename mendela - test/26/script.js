window.onload = function() {
    document.addEventListener('keypress', function(e) {
        document.body.innerHTML = 'wciśnięto: ' + String.fromCharCode(e.which)
    })
}