document.addEventListener("DOMContentLoaded", () => {
    var data = window.prompt("wpisz imię i nazwisko")
    var imie = data.split(" ")[0]
    var nazwisko = data.split(" ")[1]
    var div1 = document.createElement("div")
    div1.innerText = imie
    document.body.appendChild(div1)
    var div2 = document.createElement("div")
    div2.innerText = nazwisko
    div1.appendChild(div2)
    div1.onclick = () => window.alert(`Twoje imię to ${imie}`)
    div2.onclick = e => {
        e.stopPropagation()
        window.alert(`Twoje nazwisko to ${nazwisko}`)
    }
})
