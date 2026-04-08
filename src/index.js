import { idade } from "./idade.js";

function main () {
    
    const button = document.getElementById("check")
    
    button.addEventListener("click", idade)

}

main()