window.onload = () => {
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
    div[1].addEventListener("mouseover", e => {
        e.stopPropagation()
        clearTimeout(timDiv0)
        clearTimeout(timDiv1)
        timDiv1 = setTimeout(() => {
            div[1].style.backgroundColor = "red"
        }, 1000)
        timDiv0 = setTimeout(() => {
            div[0].style.backgroundColor = "blue"
        }, 2000)
    })
    div[0].addEventListener("mouseout", e => {
        e.stopPropagation()
        clearTimeout(timDiv0)
        clearTimeout(timDiv1)
        div[0].style.backgroundColor = "white"
        div[1].style.backgroundColor = "white"
    })
    div[1].addEventListener("mouseout", e => {
        e.stopPropagation()
        clearTimeout(timDiv0)
        clearTimeout(timDiv1)
        div[0].style.backgroundColor = "white"
        div[1].style.backgroundColor = "white"
    })
}
