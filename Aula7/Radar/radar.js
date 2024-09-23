const prompt = require("prompt-sync")()

const veloc = Number(prompt("Informe a velocidade: "))
//let limite
if (veloc <=80) {
console.log("Está dentro do limite!")

}
else if ( veloc >=81 && veloc<100){
console.log("Acima do limite, multa leve!")
}  
else {
console.log ("Você está a cima do limite, multa grave!!")
}
