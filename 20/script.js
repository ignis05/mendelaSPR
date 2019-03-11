document.addEventListener("contextmenu", e => {
    e.preventDefault()
    let x = e.clientX
    let y = e.clientY
    let block = document.createElement("div")
    block.classList.add("block")
    block.style.left = x + "px"
    block.style.top = y + "px"
    block.innerText = "Nie skopiujesz!"
    document.body.appendChild(block)
    setTimeout(()=>{
        block.remove()
    },5000)
})