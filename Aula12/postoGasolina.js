const prompt = require("prompt-sync")()

let alcool = 0
let gasolina = 0
let diesel = 0
let codigo
do {
    codigo = parseInt(prompt("Informe o tipo de combustível (1.Álcool 2.Gasolina 3.Diesel 4.Fim): "))
switch (codigo) {
        case 1:
            console.log("Você escolheu Álcool.")
            alcool++
            break
        case 2:
            console.log("Você escolheu Gasolina.")
            gasolina++
            break
        case 3:
            console.log("Você escolheu Diesel.")
            diesel++
            break
        case 4:
            console.log("MUITO OBRIGADO")
            console.log(`Álcool: ${alcool}`)
            console.log(`Gasolina: ${gasolina}`)
            console.log(`Diesel: ${diesel}`)
            break
        default:
console.log("Código inválido. Tente novamente.")
    }
} while (codigo !== 4)
