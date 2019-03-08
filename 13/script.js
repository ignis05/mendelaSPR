document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByTagName("img")[0].addEventListener("click", function () {
        window.alert(this.src)
    })
})
