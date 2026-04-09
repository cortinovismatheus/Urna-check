import { agradecer } from "./agradecer.js"

function votoObrigatorio () {
    const modal = document.querySelector(".modal")
    const votar = document.querySelector(".votar")
    const votoOp = document.querySelector(".voto-opcional")
    const btnVotar = document.querySelectorAll(".btn-votar")
    const btnBranco = document.getElementById("branco")

    btnVotar.forEach(btnVotar => {
        btnVotar.addEventListener("click", agradecer)
    });

    modal.style.display = "none"
    votar.style.display = "flex"
    votoOp.style.display = "none"

    
    btnBranco.addEventListener("click", agradecer)
}

export {votoObrigatorio}