const prompt = require("prompt-sync")()
const nota1 = Number(prompt("Informe a primeira nota: "))
const nota2 = Number(prompt("Informe a segunda nota: "))
const nota3 = Number(prompt("Informe a terceira nota: "))
const media = (nota1 + nota2 + nota3) / 3
const bonus1 = Number(5)
const bonus2 = Number(3)

if (media >= 85) { //recebe 5 pontos de bonificação
    console.log (`O aluno está aprovado e recebeu + ${bonus1} pontos!`)
} else if (media >= 71 && media <=84) { //recebe 3 pontos de bonificação
    console.log (`O aluno está aprovado e recebeu + ${bonus2} prontos!`)
}else if (media > 69 && media <71) { // O aluno aprova mas não recebe os pontos bonus
    console.log(`O aluno está aprovado!`)
}
else if (media < 70) {
    console.log(`O aluno está reprovado!`)
}