import express from "express"


const app = express()
app.use(express.json());
const port = 3000


let alunos = [
    { id: 1, nome: "Oscar", idade: 35 },
    { id: 2, nome: "Vanessa", idade: 52 },
    { id: 3, nome: "Schuster", idade: 13 }
]


app.get('/', (req, res) => {
    res.send('Listagem de Alunos')
})


/*app.get('/alunos/getAll', (req, res) => {
    res.json({
        sucess: true,
        data: alunos
    })
})
*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const aluno = alunos.find(a => a.id === id)


    if (!aluno) {
        return res.status(404).json({
            sucess: false,
            message: 'Aluno não encontrado'
        })
    }
    res.json({
        sucess: true,
        data: aluno
    })


})


//POST - criar novo Aluno
app.post('alunos', (req, res) => {
    const { nome, idade } = req.body
    if(!nome || !idade){
        return res.status(400).json({
            sucess: false,
            message: 'Nome e Idade são Obrigatorios'
        })
    }
  
    const novoAluno = {
        id: alunos.length + 1,
        nome,
        idade
    }
    alunos.push(novoAluno)
        res.status(201).json({
            sucess:true,
            message: novoAluno
        })


})
