const prompt = require("prompt-sync")()
let produtos = [
    {nome: "Teclado", preco: 150, categoria: "Perifericos"},
    {nome: "Mouse", preco: 80, categoria: "Perifericos"},
    {nome: "Monitor", preco: 600, categoria: "Perifericos"},
    {nome: "Caneca", preco: 30, categoria: "Variedades"},
    {nome: "Fone de Ouvido", preco: 120, categoria: "Perifericos"},
    {nome: "Livro", preco: 40, categoria: "Papelaria"}
]
let contagemCategorias = produtos.reduce((contador, produto) => {
    if (contador[produto.categoria]) {
        contador[produto.categoria]++
    } else {
        contador[produto.categoria] = 1
    }
    return contador
}, {})
console.table(contagemCategorias)
