document.addEventListener("DOMContentLoaded", () => {
    var spans = document.getElementsByClassName("data")
    var date = new Date

    //przewinięcie do następnego poniedziałku
    do {
        date.setDate(date.getDate() + 1)
    } while (date.getDay() != 1)

    //po kolei wsztstkie spany
    for (let i in spans) {
        var year = date.getFullYear().toString().slice(-2) //ostatnie 2 cyfry roku
        var month = ('0' + (date.getMonth() + 1)).slice(-2) //dopisuje 0 na start i bierze 2 ostatnie cyfry - zapewnia leading 0
        var day = ('0' + date.getDate()).slice(-2)  // same here ^
        spans[i].innerText = `${year}-${month}-${day}`
        date.setDate(date.getDate() + 1) //przewija na nastepny dzień - gwarantuje ciągłość miesięcy i lat
    }
})