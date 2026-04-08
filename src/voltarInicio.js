function voltarInicio () {
    const modal = document.querySelector(".modal")
    const semVoto = document.querySelector (".sem-voto")

    modal.style.display = "flex"
    semVoto.style.display = "none"
}

export { voltarInicio }