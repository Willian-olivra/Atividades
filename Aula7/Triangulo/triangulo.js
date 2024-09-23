const prompt = require("prompt-sync")()

const ladoA = Number (prompt("Informe o valor do lado A: "))
const ladoB = Number (prompt("Informe o valor do lado B: "))
const ladoC = Number (prompt("Informe o valor do lado C: "))
if (ladoA === ladoB && ladoB === ladoC) {
    console.log (`É um trinagulo Equilátero`)
}
else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC)
{
    console.log (`É um triangulo Isósceles`)
}
else 
console.log (`É um triangulo Escaleno`)
