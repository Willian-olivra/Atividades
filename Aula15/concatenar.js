const prompt = require ("prompt-sync")()
let listas = [
    ['azul', 'amarelo'],
    ['laranja', 'verde'],
    ['preto', 'branco']
  ]
  let listaConcatenada = listas.reduce((acc, listaAtual) => {
    return acc.concat(listaAtual)
  }, [])
  
  console.log(listaConcatenada)
  