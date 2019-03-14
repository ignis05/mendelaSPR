window.onload = () => {
    document.addEventListener("keydown", e => {
        if (e.code == "Enter") {
            var inp = document.getElementsByTagName("input")[0]
            if (!isNaN(inp.value)) {
                var x = setInterval(() => {
                    if (inp.value > 0) inp.value = inp.value - 1
                    else if (isNaN(inp.value)) { //przerwanie jeśli w trakcie działania zostanie wpisany znak do inputa
                        clearInterval(x)
                        window.alert("wpisz liczbę")
                        inp.value = "";
                    }
                    else clearInterval(x)
                }, 500)
            }
            else {
                window.alert("wpisz liczbę")
                inp.value = ""
            }
        }
    })
}
