// wersja upośledzona z wykorzystaniem closures (tak jak wymaga mendela)
document.addEventListener("DOMContentLoaded", () => {
    function closure(i) {
        return function () {
            window.alert(i)
        }
    }

    for (var i = 0; i < 6; i++) {
        var button = document.createElement("button")
        button.innerText = i
        button.onclick = closure(i)
        document.body.appendChild(button)
    }
})
