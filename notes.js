//  1.)
document.addEventListener("DOMContentLoaded", () => { }); window.addEventListener("load", () => { }); window.onload = () => { };
document.write(""); document.body.innerHTML = ""

//  2.)
Math.floor(Math.random() * 7) + 3
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
Math.floor(Math.random() * 11)  // <0,10>
//     ~~x === parseInt(x) - jedyna różnica to że przy ~~: NaN => 0

//  7.)
window.location = "http://" + link
window.open('http://' + link)

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