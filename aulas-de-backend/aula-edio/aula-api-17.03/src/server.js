import express from "express"

const app = express()
const port = 3000

let frutas = [
    { id: 1, nome: "Maça" },
    { id: 2, nome: "banana"},
    { id: 3, nome: "pera"}
]

app.get('/', (req, res) => {
    res.send('frutas')
})

app.get('/frutas/getAll', (req, res) => {
    res.json({
        sucess: true,
        data: frutas
    })
})

app.listen(port, () => {
    console.log(`Frutas rodando em porta ${port}`)
})
