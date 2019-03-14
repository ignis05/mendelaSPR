window.onload = () => {
    var date = new Date()
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + (date.getMonth() + 1)).slice(-2)  /// !!!-> +1 <-!!!
    let year = date.getFullYear()
    let h = ("0" + date.getHours()).slice(-2)
    let m = ("0" + date.getMinutes()).slice(-2)
    let s = ("0" + date.getSeconds()).slice(-2)
    document.getElementById("data").innerText = `${day}/${month}/${year} ${h}:${m}:${s}`
}