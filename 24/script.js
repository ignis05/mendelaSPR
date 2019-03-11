document.addEventListener("DOMContentLoaded", () => {
    var z = parseInt(window.prompt("ile elementów utworzyć?"))
    for (let i = 0; i < z; i++) {
        let x = document.createElement("div")
        x.classList.add("klasa")
        document.body.appendChild(x)
    }
})
