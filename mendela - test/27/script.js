window.onload = function() {
    generuj(101)
}

let array

function generuj(n) {
    array = new Array(n)
    for (let i = 0; i < n; i++) {
        let fail
        do {
            fail = false
            array[i] = parseInt( Math.random() * n + 1)
            for (let j = 0; j < i; j++) {
                if (array[i] == array[j]) {
                    fail = true
                }
            }
        } while (fail)
    }
    console.log(array)

    array.sort(function(a, b) {
        return b-a
    })
    console.log(array)

    document.body.innerHTML = '<pre>'

    for (let i = 0; i < n; i++) {
        document.body.innerHTML += array[i] + '&emsp;'
        if (i % 10 == 0) document.body.innerHTML += '<br>'
    }

    document.body.innerHTML += '</pre>'
}