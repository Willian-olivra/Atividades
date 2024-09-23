const prompt = require("prompt-sync")()
let pessoas = [
    {nome: "Willian", idade: 27, profissao: "Caixa"},
    {nome: "Karol", idade: 25, profissao: "Recepcionista"},
    {nome: "Vanderlei", idade: 52, profissao: "Porteiro"},
    {nome: "Gerson", idade: 34, profissao: "Professor"}

]
let somaIdade = pessoas.reduce((total, pessoa) => total + pessoa.idade, 0)
let idadeMedia = somaIdade/pessoas.length

console.log(`A idade média é: ${idadeMedia.toFixed(2)}`)