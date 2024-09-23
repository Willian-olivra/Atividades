const prompt = require("prompt-sync")();
let valor = parseInt(prompt("Digite um valor maior que zero: "));
if(valor > 0) {
    console.log(`Os números entre 1 e ${valor} são: `);
    
    for (let i = 1; i <= valor; i++) {
        console.log(i);
    }
} else {
    console.log("Por favor, digite um valor maior que zero.");
}
