const prompt = require("prompt-sync")()
let produtos = [
    {nome: "Teclado", preco: 150, categoria: "Eletrônicos"},
    {nome: "Mouse", preco: 80, categoria: "Eletrônicos"},
    {nome: "Monitor", preco: 600, categoria: "Eletrônicos"},
    {nome: "Caneca", preco: 30, categoria: "Utilidades"},
    {nome: "Fone de Ouvido", preco: 120, categoria: "Eletrônicos"},
    {nome: "Livro", preco: 40, categoria: "Papelaria"}
]
    let produtosComDesconto = produtos.map(produto => {
        return {
            nome: produto.nome,
            preco: (produto.preco * 0.9).toFixed(2)
        }
    }) 
    console.table("Produtos com 10% de desconto:")
    console.table(produtosComDesconto)