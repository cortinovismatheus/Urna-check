import { idade } from "./idade.js";
import { voltarInicio } from "./voltarInicio.js";

function main () {
    
    const button = document.getElementById("check") 
    button.addEventListener("click", idade)

    const voltar = document.getElementById("understood")
    voltar.addEventListener("click", voltarInicio)

}

main()