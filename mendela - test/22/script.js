window.onload = function() {
    let div0 = document.getElementsByTagName('div')[0]
    let div1 = document.getElementsByTagName('div')[1]
    let timeout0
    let timeout1

    div0.addEventListener('mouseover', function(e) {
        e.stopPropagation()
        clearTimeout(timeout0)
        clearTimeout(timeout1)
        timeout0 = setTimeout(function() {
            div0.style.backgroundColor = 'red'
        }, 1000)
        timeout1 = setTimeout(function() {
            div1.style.backgroundColor = 'blue'
        }, 2000)
    })
    div0.addEventListener('mouseout', function() {
        clearTimeout(timeout0)
        clearTimeout(timeout1)
        div1.style.backgroundColor = 'white'
        div0.style.backgroundColor = 'white'
    })


    div1.addEventListener('mouseover', function(e) {
        e.stopPropagation()
        clearTimeout(timeout0)
        clearTimeout(timeout1)
        timeout0 = setTimeout(function() {
            div1.style.backgroundColor = 'red'
        }, 1000)
        timeout1 = setTimeout(function() {
            div0.style.backgroundColor = 'blue'
        }, 2000)
    })
    div1.addEventListener('mouseout', function() {
        clearTimeout(timeout0)
        clearTimeout(timeout1)
        div1.style.backgroundColor = 'white'
        div0.style.backgroundColor = 'white'
    })
}