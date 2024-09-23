const prompt = require("prompt-sync")()

let i = 1
while (i <= 30){
    if (i % 4 === 0){
        i++;
      continue;
}
console.log(i);
i++
}