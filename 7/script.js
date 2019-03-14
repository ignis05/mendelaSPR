document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formularz").childNodes[1].type = "button"
})

function btClick() {
    var link = document.getElementById("formularz").childNodes[0].value
    window.location = "http://" + link
    // window.open(http:// + link)  //  -otwiera w nowej karcie
}