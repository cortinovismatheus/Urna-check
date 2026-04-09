import { votoObrigatorio } from "./votoObrigatorio.js"
import { voltarInicio } from "./voltarInicio.js"

function votoOpcional () {
    const modal = document.querySelector(".modal")
    const votoOp = document.querySelector(".voto-opcional")
    const sim = document.querySelector(".btn-sim")
    const nao = document.querySelector(".btn-nao")

    modal.style.display = "none"
    votoOp.style.display = "flex"

    sim.addEventListener("click", votoObrigatorio)
    nao.addEventListener("click", voltarInicio)
    
}

export { votoOpcional }