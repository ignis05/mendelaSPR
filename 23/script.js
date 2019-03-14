window.addEventListener("load", () => {
    var buttons = document.getElementsByTagName("button")
    for (let i in buttons) {
        buttons[i].innerText = (~~(i) + 1)
    }
})
