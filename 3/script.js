document.addEventListener("DOMContentLoaded", () => {
    date = new Date
    document.getElementById("data").innerHTML = date.toLocaleDateString() + " " + date.toLocaleTimeString()
})