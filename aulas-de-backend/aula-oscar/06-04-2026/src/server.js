import express from 'express'
import animeRoutes from './routes/animeRoutes.js'

const app = express()
const port = 3001

// Middleware para ler JSON no corpo da requisição
app.use(express.json())

// Rotas principais
app.use("/animes", animeRoutes)

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})