const prompt = require ("prompt-sync")()
let pessoas = [
    {nome: "Willian", idade: 27},
    {nome: "Karol", idade: 25},
    {nome: "Vanderlei", idade: 52},
    {nome: "Gerson", idade: 34}
  ]
  let objetos = pessoas.map(pessoa => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`
  })
  
  console.table(objetos)
  