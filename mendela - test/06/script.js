window.onload = function() {
    let x = '30'
    document.getElementsByTagName('input')[1].value = Math.floor(parseInt(x) + Math.random() * 11)
}