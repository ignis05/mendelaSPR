window.onload = function() {
    document.cookie = encodeURIComponent(navigator.userAgent)
    document.body.innerHTML = decodeURIComponent(document.cookie)
}