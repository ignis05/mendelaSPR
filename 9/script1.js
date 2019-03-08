// wersja normalna z wykorzystaniem let
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 6; i++) {
        var button = document.createElement("button")
        button.innerText = i
        button.onclick = () => window.alert(i)
        document.body.appendChild(button)
    }
})
