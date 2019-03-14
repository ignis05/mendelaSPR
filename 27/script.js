function generuj(x) {
    document.body.innerHTML = ""
    console.log(x);
    var tab = new Array(x)
    console.log(tab);
    for (let i = 0; i < tab.length; i++) {
        while (true) {
            var los = ~~(Math.random() * x) + 1
            if (!tab.includes(los)) {
                tab[i] = los
                break
            }
        }
    }
    console.log(tab);
    tab.sort((a, b) => b - a)
    console.log(tab);
    var table = document.createElement("table")
    table.style.borderSpacing = "25px 0"
    document.body.appendChild(table)
    var tr
    for (let i in tab) {
        if(i%10 == 0){
            tr = document.createElement("tr")
            table.appendChild(tr)
        }
        let z = document.createElement("td")
        z.innerText = tab[i]
        tr.appendChild(z)
    }
}

window.onload = () => {
    generuj(20)
}
