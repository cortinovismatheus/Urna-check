function voltarInicio () {
    const modal = document.querySelector(".modal")
    const semVoto = document.querySelector (".sem-voto")
    const votoOp = document.querySelector(".voto-opcional")
    const agradecer = document.querySelector(".agradecimento")

    modal.style.display = "flex"
    semVoto.style.display = "none"
    votoOp.style.display = "none"
    agradecer.style.display = "none"
}

export { voltarInicio }