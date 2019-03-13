window.onload = function() {
    for (let i = 0; i < 6; i++) {
        let button = document.createElement('button')
        button.innerHTML = i
        button.addEventListener('click', function() {
            window.alert(i)
        })
        document.body.append(button)
    }
}