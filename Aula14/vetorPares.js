const prompt = require("prompt-sync")()
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(num => num % 2 === 0);
console.table(numeros)
console.table(numerosPares)