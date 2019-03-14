window.onload = () => {
    document.getElementsByTagName("img")[0].addEventListener("click", function () {
        window.alert(this.src)
    })
}
