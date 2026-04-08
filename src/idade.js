function idade() {
    var res = document.getElementById("res")

    var valor = document.getElementById("date").value
    var nascimento = new Date(valor)
    var ano = nascimento.getFullYear()
    var mes = nascimento.getMonth()
    var dia = nascimento.getDate()

    var hoje = new Date()
    var anoAtual = hoje.getFullYear()
    var mesAtual = hoje.getMonth()
    var diaAtual = hoje.getDate()

    var idade = anoAtual - ano

    if(valor ===""){
        alert("Por favor, selecione uma data")
        return
    }

    if(nascimento > hoje){
        alert("Insira uma data de nascimento válida!")
        return
    }
    
    if(mesAtual < mes || (mesAtual == mes && diaAtual < dia)){
        idade --
    }

    console.log(idade)

    if(idade < 16){
        res.innerHTML = "voce não pode votar"
    }else if (idade < 18 || idade >= 70){
        res.innerHTML = "voto opcional"
    }else{
        res.innerHTML = "voto obrigatorio"
    }
}

export { idade }