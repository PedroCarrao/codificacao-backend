import express from 'express'
import { animeService } from '../services/animeServices.js'

const route = express.Router()


route.get("/", (req, res) => {
    res.json(animeService.getAll())
})

route.get("/:id", (req, res) => {
    const { id } = req.params
    const anime = animeService.getById(id)

    if (!anime) {
        return res.status(404).json({ message: "anime não encontrado" })
    }

    return res.json(anime) // O return garante que a função pare aqui
})

export default route