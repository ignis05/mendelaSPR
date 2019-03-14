function wypisz() {
    var los = ~~(Math.random() * 26) + 65
    document.getElementsByName("znak")[0].value = String.fromCharCode(los)
}
