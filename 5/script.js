document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        var imgs = document.getElementsByTagName("img")
        var tab = []
        Object.values(imgs).forEach(img => {
            tab.push(img.src)
        });
        tab.push(tab.shift())
        Object.values(imgs).forEach(img => {
            img.src = tab.shift()
        });
    }, 1000)
})