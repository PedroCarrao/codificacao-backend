import express from 'express'
import 'dotenv/config'
import { frutasRoute } from './routes/frutas.route.js'

const app = express()
const PORT = process.env.API_PORT || 3000

app.use(express.json())

app.get("/", (req, res) => {
    return res.json("Hello World!")
})

app.use("/frutas", frutasRoute)

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
})