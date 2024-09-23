const prompt = require("prompt-sync")()
let cores = ["azul", "amarelo", "laranja", "vermelho"];
let cor = String(prompt("Insira uma cor: "))
console.log(cores.includes(cor))

















// const prompt = require("prompt-sync")();

// let cor = prompt("Coloque a cor (Azul, Amarelo, Preto, Branco): ").toLowerCase();
// let cores = ["azul","amarelo","preto","branco"];

// let mostrar = cores.indexOf(cor);

// if (mostrar !== -1) {
//     console.log(`A cor escolhida foi ${cor} e a posição é ${mostrar}`);
// } else {
//     console.log(`Cor não encontrada.`);
// }
