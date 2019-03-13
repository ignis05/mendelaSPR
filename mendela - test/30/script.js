window.onload = function() {
    let form = Array.from(document.getElementById('formularz').children)
    
    let send = form[4]
    send.type = 'button'
    send.addEventListener('click', function() {
        if(form[0].value == '' || form[2].value == '') {
            window.alert('wypełnij formularz')
        } else {
            location.href = document.getElementById('formularz').action
        }
    })
}