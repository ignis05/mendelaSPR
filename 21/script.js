window.onload = () => {
    document.getElementsByTagName("input")[0].value = "Wyszukaj w google"
    document.getElementsByTagName("input")[0].addEventListener("click", () => {
        window.location = "http://www.google.com"
    })
}
