function votoObrigatorio () {
    const modal = document.querySelector(".modal")
    const votar = document.querySelector(".votar")
    const votoOp = document.querySelector(".voto-opcional")

    modal.style.display = "none"
    votar.style.display = "flex"
    votoOp.style.display = "none"
}

export {votoObrigatorio}