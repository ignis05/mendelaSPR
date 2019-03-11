document.cookie = `browser = ${encodeURIComponent(navigator.userAgent)}`
console.log(decodeURIComponent(document.cookie));