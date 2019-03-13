window.onload = function() {
    let imgs = Array.from(document.getElementsByTagName('img'))
    let srcs = ['a', 'b', 'c', 'd', 'e']
    let counter = 1
    setInterval(function () {
        for (let i in imgs) {
            imgs[i].src = 'imgs/' + srcs[parseInt(parseInt(i) + counter) % 5] + '.png'
        }
        counter += 1
    }, 1000)
}