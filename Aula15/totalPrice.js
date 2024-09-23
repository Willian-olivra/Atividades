const prompt = require ("prompt-sync")()
const produtos = [
    {nome: 'monitor', preco: 300},
    {nome: 'teclado', preco: 150},
    {nome: 'mouse', preco: 125}
  ]
  const valorTotal = produtos.reduce((total, produto) => {
    return total + produto.preco
  }, 0)
  
  console.log(`O valor total dos produtos é: ${valorTotal}`)
  