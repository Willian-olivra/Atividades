const prompt = require("prompt-sync")()

let num = Number (prompt("Entre com um numero: "))
let fator = num
let x = num -1
for (let i = x; i > 1; i-- ){
    
    fator *= i
    console.log(fator)
    
}

