const prompt = require("prompt-sync")()
let numeros = [10, 2 ,9 , 7, 5]
console.log(numeros)
numeros.sort(function(a, b){ //função para comparar
    return a - b  // ordena em crescente
})
console.log(`Em ordem crescente: ${numeros}`)