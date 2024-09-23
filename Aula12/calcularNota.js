const prompt = require("prompt-sync")()
let i = 1
while (i === 1) {
let nota1 = Number(prompt("Entre com a primeira nota: ")) //primeira entrada para calculo
let nota2 = Number(prompt("Entre com a segunda nota: "))
let media = (nota1 + nota2) /2 //calculo para encontrar media
// até aqui funcionando
console.log(`A média final do aluno é: ${media.toFixed(2)}`)
i = parseInt(prompt("Calcular a média de outro aluno? 1. Sim 2. Não: "))
while (i !== 1 && 1 !== 2) {
    if(2){
        break
    }
    i = parseInt(prompt("Opção inválida. Digite 1 para Sim ou 2 para Não: "))
    
}
}
console.log(`Calculo encerrado!`)