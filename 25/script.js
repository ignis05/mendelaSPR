document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("area").addEventListener("keydown", function (event) {
        console.log(event.code);
        if (this.style.border == "1px dashed black") {
            this.style.border = "1px dotted black"
        }
        else {
            this.style.border = "1px dashed black"
        }
    })
})
