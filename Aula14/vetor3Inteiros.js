const prompt = require("prompt-sync")()

const numeros = [5, 10, 15];

numeros[0] = numeros[0]*2
numeros[1] = numeros[1]*2
numeros[2] = numeros[2]*2
console.table(numeros)