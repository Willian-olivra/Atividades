const prompt = require("prompt-sync")()
let n = (prompt("Entre com um nome: "))
let nomes = ["willian", "gabriel", "nelson", "helio", "luiz", "maria", "erick", "karol", "bruna", "valeria"]
let procura = nomes.find((nome)=> nome === n)
if(procura){
    console.log(`ACHEI`)}
    else {
        console.log(`NÃO ACHEI`)
    }
        
    
