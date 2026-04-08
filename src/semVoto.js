function semVoto(dataNascimento) {
    const modal = document.querySelector(".modal")
    const naoVota = document.querySelector(".sem-voto")
    const tempoRestante = document.getElementById("tempoRestante")

    modal.style.display = "none"
    naoVota.style.display = "flex"

    console.log(dataNascimento)

    const hoje = new Date()

    const data16 = new Date(dataNascimento)
    data16.setFullYear(dataNascimento.getFullYear() + 16)

    let anos = data16.getFullYear() - hoje.getFullYear()
    let meses = data16.getMonth() - hoje.getMonth()
    let dias = data16.getDate() - hoje.getDate()

    if (dias < 0) {
        meses--
        const UltimoDiaMesAnterior = new Date(
            hoje.getFullYear(),
            hoje.getMonth(),
            0
        ).getDate()
        dias += UltimoDiaMesAnterior
    }

    if(meses < 0){
        anos--
        meses += 12
    }
    tempoRestante.innerHTML = `Faltam ${anos} anos, ${meses} meses e ${dias} dias para votar`
}

export { semVoto }