const prompt = require ("prompt-sync")()
const nomes = ['willian', 'karol', 'ana', 'antony']

const nomesObj = nomes.reduce((name, nome) => {
  name[nome] = nome.length
  return name
}, {})

console.table(nomesObj)
