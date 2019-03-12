window.addEventListener("load", () => {
    console.log("x");
    console.log(document.body.scrollHeight);
    document.body.scrollTop = document.body.scrollHeight
    console.log(document.body.scrollTop);
})