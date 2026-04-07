import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

// IMPORTANTE: Esta linha permite que o Express leia o JSON que você envia pelo Thunder Client
app.use(express.json());

let alunos = [
    { id: 1, nome: "Oscar", idade: 35 },
    { id: 2, nome: "Vanessa", idade: 52 },
    { id: 3, nome: "Schuster", idade: 13 }
];

app.get('/', (req, res) => {
    res.send('Listagem de Alunos');
});

// GET - Listar todos os alunos (para você testar se o POST funcionou depois)
app.get('/alunos', (req, res) => {
    res.json({ sucess: true, data: alunos });
});

app.get('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            sucess: false,
            message: 'Aluno não encontrado'
        });
    }
    res.json({ sucess: true, data: aluno });
});

// POST - CRIAR NOVO ALUNO
// Adicionada a barra "/" antes de alunos
app.post('/alunos', (req, res) => {  // Adicione a / se não tiver
    const { nome, idade } = req.body;

    if (!nome || !idade) {
        return res.status(400).json({
            sucess: false,
            message: 'Nome e Idade são Obrigatorios'
        });
    }

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        idade
    };

    alunos.push(novoAluno);

    res.status(201).json({
        sucess: true,
        data: novoAluno // mudei de message para data para ficar padronizado
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});