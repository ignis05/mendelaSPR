window.onload = () => {
    document.getElementById("area").style.border = "5px dotted black"
    document.getElementById("area").addEventListener("keydown", function (event) {
        console.log(event.code);
        if (this.style.border == "5px dashed black") {
            this.style.border = "5px dotted black"
        }
        else {
            this.style.border = "5px dashed black"
        }
    })
}
