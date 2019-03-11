document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", function (event) {
        console.log(event.key);
        if (!event.key[1]) document.body.innerHTML = `Wciśnięto: ${event.key}`
    })
})
