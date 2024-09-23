const prompt = require("prompt-sync")()

let vetor = Number(prompt("Digite o n° de elementos: "))
let parImpar = []
for (let i = 0 ; i < vetor; i++){
    if(i%2===0){
        parImpar.push("Par")
    
    }else{
        parImpar.push("Impar")
    }
}
console.log(`A ordem do vetor é:`, parImpar)