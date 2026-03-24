import express from 'express'
import route from './routes/animeRoutes.js'
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/animes", route)


app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
})
