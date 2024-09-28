const ver = document.getElementById("ver")
const span = document.getElementById("span")

ver.addEventListener("mouseover", () => {

    span.classList.add("mostrar")

})

ver.addEventListener("mouseout", () => {

    span.classList.remove("mostrar")

})
