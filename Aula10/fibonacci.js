const prompt = require ("prompt-sync")()
let n1 = 0, n2 = 1, nextTerm;

console.log("Sequência de Fibonacci até o 10º termo: ");

for (let i = 1; i <= 10; i++) {
    console.log(n1); 
    nextTerm = n1 + n2;
    n1 = n2; 
    n2 = nextTerm; 
}
