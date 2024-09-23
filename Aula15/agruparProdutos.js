const prompt = require ("prompt-sync")()
let produtos = [
    {nome: "Teclado", preco: 150, categoria: "eletronicos"},
    {nome: "Mouse", preco: 50, categoria: "eletronicos"},
    {nome: "Monitor", preco: 600, categoria: "eletronicos"},
    {nome: "Caneca", preco: 30, categoria: "utilidades"},
    {nome: "Fone de Ouvido", preco: 120, categoria: "eletronicos"},
    {nome: "Livro", preco: 40, categoria: "papelaria"}
]
const produtosAgrupados = produtos.reduce((agrupa, produto) => {
    if (produto.preco > 50) {
        agrupa.caros.push(produto)
    } else {
        agrupa.baratos.push(produto)
    }
    return agrupa
}, { caros: [], baratos: [] })

console.log("Produtos caros:", produtosAgrupados.caros)
console.log("Produtos baratos:", produtosAgrupados.baratos)
