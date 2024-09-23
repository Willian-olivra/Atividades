const prompt = require("prompt-sync")()
let pessoas = [
    {nome: "Willian", idade: 27},
    {nome: "Karol", idade: 25},
    {nome: "Vanderlei", idade: 52},
    {nome: "Gerson", idade: 34}
]

let pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
    return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
  });
  
  console.table(pessoaMaisVelha)