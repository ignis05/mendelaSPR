window.onload = () => {
    document.getElementById("formularz").onsubmit = function (e) {
        e.preventDefault()
        if (document.getElementById("formularz").children[0].value && document.getElementById("formularz").children[2].value) {
            this.submit()
        }
        else {
            window.alert("wypełnij formularz")
        }
    }
}
