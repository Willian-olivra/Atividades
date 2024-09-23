const prompt = require ("prompt-sync")()
let numeros = [60,450,970,850,910,800,750,290,380,170]
let divisao = numeros.length
for(let i = 0; i < divisao; i++){
    let resultado = numeros[i]/divisao
    console.table(`O Número ${numeros[i]} dividido por ${divisao} o resultado é ${resultado}`)
}