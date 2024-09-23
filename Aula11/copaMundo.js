const prompt = require ("prompt-sync")()


let ano;

do {
    ano = parseInt(prompt("Digite um ano (ou 0 para sair): "));

    if (ano === 0) {
        console.log("Programa encerrado.");
        break;
    }
    if (ano < 1930) {
        console.log("Ano anterior ao início das Copas do Mundo.");
    } else if (ano === 1942 || ano === 1946) {
        console.log(`${ano} não houve Copa do Mundo devido à Segunda Guerra Mundial.`);
    } else if ((ano - 1930) % 4 === 0) {
        console.log(`${ano} é ano de Copa do Mundo!`);
    } else {
        console.log(`${ano} não é ano de Copa do Mundo.`);
    }

} while (ano !== 0);
