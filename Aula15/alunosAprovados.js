const prompt = require ("prompt-sync")()
let alunos = [
    {nome: 'Willian', nota: 9},
    {nome: 'Jonathan', nota: 5},
    {nome: 'Karol', nota: 8},
    {nome: 'Mario', nota: 2}
  ]
  let aprovados = alunos.filter(aluno => aluno.nota > 7)
  
  console.table(aprovados)
