const prompt = require ("prompt-sync")()

let n1 = Number(prompt("Informe o primeiro valor: "))
let n2 = Number(prompt("Informe o segundo valor: "))

while(n2 ===0){
    console.log(`Valor invalido!`)
    n2 = Number(prompt("Informe o segundo valor: "))

}
let resultado = n1 / n2
    console.log(resultado)