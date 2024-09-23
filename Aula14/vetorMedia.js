const prompt = require("prompt-sync")()
let numeros = [10, 20, 30, 40, 50]
let soma = 0

for (let i =0; i < numeros.length; i++)
soma= soma +numeros[i]

   

console.log(`A media do vetor é: ${soma / numeros.length}`)
