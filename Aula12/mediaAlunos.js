const prompt = require("prompt-sync")()
let quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos na turma: "))
let somaNotas = 0
for (let i = 1; i <= quantidadeAlunos; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `))
    somaNotas+=nota
}
let media = somaNotas / quantidadeAlunos
console.log(`A média aritmética das notas é: ${media.toFixed(2)}`)
