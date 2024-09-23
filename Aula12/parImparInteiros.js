const prompt = require("prompt-sync")()

let numero

do {
    numero = parseInt(prompt("Digite um valor inteiro (digite 0 para encerrar): "))
if (numero > 0) {
        if (numero % 2 === 0) {
            console.log(`${numero} é PAR.`)
        } else {
            console.log(`${numero} é ÍMPAR.`)
        }
    } else {
        console.log("Programa encerrado.")
    }
} while (numero > 0)