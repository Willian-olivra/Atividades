const prompt = require("prompt-sync")()
let numeros = [10, 20, 30, 40, 50]
let maior = 0;
for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
    maior = numeros[i];
}
}
console.log(maior)
