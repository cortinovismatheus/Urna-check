function voltarInicio () {
    const modal = document.querySelector(".modal")
    const semVoto = document.querySelector (".sem-voto")
    const votoOp = document.querySelector(".voto-opcional")

    modal.style.display = "flex"
    semVoto.style.display = "none"
    votoOp.style.display = "none"
}

export { voltarInicio }