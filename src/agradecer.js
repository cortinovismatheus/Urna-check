import { voltarInicio } from "./voltarInicio.js"

function agradecer() {
    const votar = document.querySelector(".votar")
    const agradecer = document.querySelector(".agradecimento")
    const finalizar = document.getElementById("finalizar")

    votar.style.display = "none"
    agradecer.style.display = "flex"

    finalizar.addEventListener("click", voltarInicio)
}

export {agradecer}