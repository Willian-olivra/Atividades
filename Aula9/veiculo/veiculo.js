const prompt = require("prompt-sync")()
function tipoVeiculo(veiculo){
    let modelo
    let marca
    let peso
    let tanque
    let valor
switch (veiculo) {
    case '1':
modelo = "Factor 150"
marca = "Yamaha"
peso = "1500kg"
tanque = "18L"
valor = "18.500,00$"
    break
case '2':
    modelo = "Gol 1.0 150"
    marca = "Volkswagen"
    peso = "2.5kg"
    tanque = "30L"
    valor = "36.000,00"
    break
    default: 
    modelo = "Selecione um modelo valido"
}

}
const veiculo = (prompt("Selecione 1 para Motos e 2 para Carros: "))
let escolha = tipoVeiculo(veiculo)