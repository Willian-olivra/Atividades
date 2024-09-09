const prompt = require("prompt-sync")();

function tipoCartao(cartao) {
    const cumprimento = cartao.length;
    let result;

    if (cumprimento === 16) {
        switch (cartao.charAt(0)) {
            case '4':
                result = "Visa";
                break;
            case '5':
                result = "Mastercard";
                break;
            case '6':
                result = "Discover";
                break;
            default:
                result = "Bandeira desconhecida";
        }
    } else {
        result = "Número de cartão inválido";
    }

    return result;
}

const cartao = prompt("Digite o número do cartão: ");
let result = tipoCartao(cartao);
console.log(`A bandeira do seu cartão é: ${result}`);
