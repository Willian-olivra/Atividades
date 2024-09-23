const prompt = require ("prompt-sync")()
let produtos = [
    {nome: "Teclado", preco: 150, categoria: "eletronicos"},
    {nome: "Mouse", preco: 80, categoria: "eletronicos"},
    {nome: "Monitor", preco: 600, categoria: "eletronicos"},
    {nome: "Caneca", preco: 30, categoria: "utilidades"},
    {nome: "Fone de Ouvido", preco: 120, categoria: "eletronicos"},
    {nome: "Livro", preco: 40, categoria: "papelaria"}
]
function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria)
}
let categoriaDesejada = prompt("Digite a categoria desejada: ")
let produtosFiltrados = filtrarPorCategoria(categoriaDesejada)

console.log(`Produtos da categoria ${categoriaDesejada}:`)
console.log(produtosFiltrados)
