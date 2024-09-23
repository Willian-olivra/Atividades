const prompt = require("prompt-sync")()
let produtos = [
    {nome: "Teclado", preco: 150, categoria: "Eletrônicos"},
    {nome: "Mouse", preco: 80, categoria: "Eletrônicos"},
    {nome: "Monitor", preco: 600, categoria: "Eletrônicos"},
    {nome: "Caneca", preco: 30, categoria: "Utilidades"},
    {nome: "Fone de Ouvido", preco: 120, categoria: "Eletrônicos"},
    {nome: "Livro", preco: 40, categoria: "Papelaria"}
]
let produtosCaros = produtos.filter(produto => produto.preco > 100)
console.table("Produtos que custam mais de R$100: ")
console.table(produtosCaros)
