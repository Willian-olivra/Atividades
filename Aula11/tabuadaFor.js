const prompt = require("prompt-sync")()

const num = Number(prompt("Informe o numero que deseja saber a tabuada:  "))
for (let i = 1; i <=10; i++ ){
    console.log(`${num}x${i}=\n${num*i}`)
}