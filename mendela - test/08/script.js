window.onload = function() {
    let input = document.getElementsByTagName('input')[0]
    let interval = null
    input.addEventListener('keydown', function(e) {
        if (e.which == 13) {
            if (!isNaN(this.value)) {
                clearInterval(interval)
                interval = setInterval(function() {
                    if (parseInt(input.value) > 0) {
                        input.value = parseInt(input.value) - 1
                    } else {
                        clearInterval(interval)
                    }
                }, 500)
            } else {
                window.alert('wpisz liczbę')
                input.value = ''
            }
        }
    })
}