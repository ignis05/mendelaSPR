//  1.)
document.addEventListener("DOMContentLoaded", () => { }); window.addEventListener("load", () => { }); window.onload = () => { };
document.write(""); document.body.innerHTML = ""

//  2.)
~~(Math.random() * 7) + 3
//  Math.floor(Math.random() * (x + 1 [-y]) ) [+y] - liczba całkowita z zakresu <y, x>
// (Math.random() * (x [-y])) [+y] - dowolna liczba z zakresu <y, x>

//  3.)
date = new Date()
document.getElementById("data").innerHTML = date.toLocaleDateString() + " " + date.toLocaleTimeString()
let day = ("0" + date.getDate()).slice(-2)
let month = ("0" + (date.getMonth() + 1)).slice(-2)  /// !!!-> +1 <-!!!
let year = date.getFullYear().slice(-2)
date.getHours() // getMinutes() getSeconds()

//  4.)
var spans = document.getElementsByClassName("data")
var date = new Date
//przewinięcie do następnego poniedziałku
do {
    date.setDate(date.getDate() + 1) //przewija na nastepny dzień - gwarantuje ciągłość miesięcy i lat
} while (date.getDay() != 1)
//po kolei wsztstkie spany
for (let i in spans) {
    var year = date.getFullYear().toString().slice(-2) //ostatnie 2 cyfry roku
    var month = ('0' + (date.getMonth() + 1)).slice(-2) //dopisuje 0 na start i bierze 2 ostatnie cyfry - zapewnia leading 0
    var day = ('0' + date.getDate()).slice(-2)  // same here ^
    spans[i].innerText = `${year}-${month}-${day}`
    date.setDate(date.getDate() + 1) //przewija na nastepny dzień - gwarantuje ciągłość miesięcy i lat
}

//  5.)
setInterval(() => {
    var imgs = document.getElementsByTagName("img")
    var tab = []
    // wpisanie wszystkich src do tablicy
    Object.values(imgs).forEach(img => {
        tab.push(img.src)
    });
    // przesunięcie pierwszego elementu na miejsce ostatniego
    tab.push(tab.shift())
    // przypisanie wszystkim elementom src po jednym elemencie
    Object.values(imgs).forEach(img => {
        img.src = tab.shift()
    });
}, 1000)

//  6.)
~~(Math.random() * 11)  // <0,10>
//     ~~x === parseInt(x) - jedyna różnica to że przy ~~: NaN => 0

//  7.)
document.getElementById('formularz').children[1].type = 'button' // - zeby nie wysyłać formularza - zmiana typu buttona
window.location = "http://" + link // - w tej samej karcie
window.open('http://' + link)   // - w nowej karcie

//  8.)
isNaN(sth)
var x = setInterval(() => {
    if (sth) {
        //instrukcje
    }
    else {
        clearInterval(x)
    }
})
document.addEventListener("keydown", e => {
    if (e.code == "Enter") { }
    if (e.which == 13) { }
})

//  9.)
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

//  10.)
addEventListener('mouseenter')
//<p onmouseover=pogrub(event)>Wiersz 1</p>
// function pogrub(event) {
//     event.target.style.fontWeight = "bold"
// }

//  11.)
this.style.height.slice(0, -2) // - odciąć pixele
this.style.height = hi + "px" // - dopisać pixele
//converting obj to array:
//  Object.values(object).forEach(el=>{}}) || Array.from(object)

//  12.)
e => {
    var mouseX = e.pageX - div.clientLeft;
    var width = this.clientWidth
    //var width = window.getComputedStyle(this).width.slice(0, -2)
}

//  13.)
document.getElementsByTagName("img")[0].addEventListener("click", function () { window.alert(this.src) }) //całe zadanie

//  14.)
document.getElementsByTagName("input")[1].onfocus = function () { this.style.background = "#888888" }
document.getElementsByTagName("input")[1].onblur = function () { this.style.background = "white" }

//  15.)
var img = new Image()
img.src = "http://www.tl.krakow.pl/semantic.cms/templates/aqua_black/graphics/bg_header.png"
document.body.append(img)

//  16.)
e.stopPropagation()
// najlepiej zapisać dane w zmiennych zamiast wyciągać z innertexta

//  17.)
var los = ~~(Math.random() * 26) + 65 //    Math.floor(Math.random() * (x + 1 [-y]) ) [+y] - liczba całkowita z zakresu <y, x>
String.fromCharCode(los)

//  18.)
let width = div.clientWidth      //  var w = window.getComputedStyle(that).getPropertyValue("width")
let height = div.clientHeight    //  var h = window.getComputedStyle(that).getPropertyValue("height")

//  19.)
document.cookie = `browser = ${encodeURIComponent(navigator.userAgent)}`
console.log(decodeURIComponent(document.cookie));

//  20.)
document.addEventListener("contextmenu", e => {
    e.preventDefault()
    let x = e.clientX
    let y = e.clientY
    let block = document.createElement("div")
    block.classList.add("block")
    block.style.left = x + "px"
    block.style.top = y + "px"
    block.innerText = "Nie skopiujesz!"
    document.body.appendChild(block)
    setTimeout(() => {
        block.remove()
    }, 5000)
})

//  .block{ border:1px solid black; position: absolute; display: block;}

//  21.)
window.location = "http://www.google.com"

//  22.)
var timDiv0 = null
var timDiv1 = null
var div = document.getElementsByTagName("div")
div[0].addEventListener("mouseover", e => {
    e.stopPropagation()
    clearTimeout(timDiv0)
    clearTimeout(timDiv1)
    timDiv0 = setTimeout(() => {
        div[0].style.backgroundColor = "red"
    }, 1000)
    timDiv1 = setTimeout(() => {
        div[1].style.backgroundColor = "blue"
    }, 2000)
})
div[0].addEventListener("mouseout", e => {
    e.stopPropagation()
    clearTimeout(timDiv0)
    clearTimeout(timDiv1)
    div[0].style.backgroundColor = "white"
    div[1].style.backgroundColor = "white"
})
//dla div[1] identycznie tylko na odwrót setTimeout'y

//  23.)
var buttons = document.getElementsByTagName("button")
for (let i in buttons) {
    buttons[i].innerText = (~~(i) + 1)
}

//  24.)
var z = ~~(window.prompt("ile elementów utworzyć?"))
for (let i = 0; i < z; i++) {
    let x = document.createElement("div")
    x.classList.add("klasa")
    document.body.appendChild(x)
}

//  25.)
document.getElementById("area").style.border = "5px dotted black"
document.getElementById("area").addEventListener("keydown", function (event) {
    console.log(event.code);
    if (this.style.border == "5px dashed black") {
        this.style.border = "5px dotted black"
    }
    else {
        this.style.border = "5px dashed black"
    }
})

//  26.)
document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (!event.key[1]) document.body.innerHTML = `Wciśnięto: ${event.key}` // krótszy niż 2 znaki
    //document.body.innerHTML = 'wciśnięto: ' + String.fromCharCode(e.which)
})

//  27.)
function generuj(x) {
    document.body.innerHTML = "" //reset strony
    console.log(x);

    var tab = new Array(x)  // "utwórz tablicę o rozmiarze N"
    console.log(tab);

    for (let i = 0; i < tab.length; i++) {  //  "wypełnij ją losowymi liczbami całkowitymi z zakresu <1;N>"
        while (true) {      // "wypełniając zapewnij by nie było w tablicy duplikatów" - losuje tak długo aż nie będzie duplikatu
            var los = ~~(Math.random() * x) + 1
            if (!tab.includes(los)) {
                tab[i] = los
                break
            }
        }
    }
    console.log(tab);

    tab.sort((a, b) => b - a) //    "posortuj tablicę malejąco"
    console.log(tab);

    //  "wypisz na stronie wszystkie liczby łamiąc wiersze co 10 (zachowaj wygląd jak na filmie)"
    var table = document.createElement("table")
    table.style.borderSpacing = "25px 0"
    document.body.appendChild(table)
    var tr
    for (let i in tab) {
        if (i % 10 == 0) {
            tr = document.createElement("tr")
            table.appendChild(tr)
        }
        let z = document.createElement("td")
        z.innerText = tab[i]
        tr.appendChild(z)
    }
}

//  28.)
window.scrollTo(0, document.body.scrollHeight);
// document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;

//  29.)
class Koło {
    constructor(speed) {
        this.speed = speed
        this.DOM = null
        this.wstaw()
        this.obracaj()
    }
    wstaw() {
        this.DOM = new Image()
        this.DOM.src = "./round.png"
        this.DOM.style.position = "fixed"
        var x = ~~(Math.random() * (window.innerWidth - 50)) // - szer obrazka - żeby nie wychodziło
        var y = ~~(Math.random() * (window.innerHeight - 50))
        this.DOM.style.left = x + "px"
        this.DOM.style.top = y + "px"
        document.body.append(this.DOM)
    }
    obracaj() {
        this.DOM.classList.add("rotating")
        this.DOM.style.animationDuration = this.speed + "s"
    }
}

window.addEventListener("load", () => {
    setInterval(() => {
        let speed = Math.random() * 5
        new Koło(speed)
    }, 2000)
})

//  30.)
document.getElementById("formularz").onsubmit = function (e) {
    e.preventDefault()
    if (document.getElementById("formularz").children[0].value && document.getElementById("formularz").children[2].value) {
        this.submit()
    }
    else {
        window.alert("wypełnij formularz")
    }
}
//ewnetulanie button.type = 'button' i normalnie onclick na buttonie