document.addEventListener("DOMContentLoaded", () => {
    if (window.confirm("czy chcesz wylosować liczbę?")) {
        document.getElementsByTagName("input")[0].value = ~~(Math.random() * 7) + 3
    }
    else {
        window.alert("szkoda :(")
    }
})