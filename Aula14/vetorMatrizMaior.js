const prompt = require("prompt-sync")()
let matriz = [
    [1,2,3],
    [4,5,6]
];
let maior = 0
for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
    if(matriz[i][j] > maior){
        maior = matriz[i][j]
    }
}}
console.log(maior)