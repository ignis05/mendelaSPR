window.onload = function() {
    let area = document.getElementById('area')
    area.style.borderStyle = 'dotted'
    area.style.borderColor = '#000'
    let cnt = 0
    let brdr = ['dotted', 'dashed']

    area.addEventListener('keydown', function() {
        cnt++
        if (cnt > 1) cnt = 0
        area.style.borderStyle = brdr[cnt]
    })
}