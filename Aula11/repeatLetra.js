const prompt = require("prompt-sync")()
let palavra = prompt("Digite uma palavra: ")
let letra = prompt("Digite a letra a ser contada: ")
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
        contador++;
    }
}

console.table(`A letra "${letra}" aparece ${contador} vez(es) na palavra "${palavra}".`);
