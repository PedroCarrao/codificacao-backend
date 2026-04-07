import express from 'express'
import { animeService } from '../services/anime.service.js'

const route = express.Router()

// GET: Listar todos
route.get("/", (req, res) => {
    const data = animeService.getAll()
    res.json(data)
})

// POST: Criar novo (CORRIGIDO)
route.post("/", (req, res) => {
    const { nome, genero, ano } = req.body
    
    if (!nome || !genero || !ano) {
        return res.status(400).json({ message: "Todos os campos (nome, genero, ano) são obrigatórios" })
    }
    
    // Enviando como um objeto { nome, genero, ano }
    const newAnime = animeService.create({ nome, genero, ano }) 
    res.status(201).json(newAnime)
})

// GET: Buscar por ID
route.get("/:id", (req, res) => {
    const { id } = req.params
    const anime = animeService.getById(id)
    if (!anime) return res.status(404).json({ message: "Anime não encontrado" })
    res.json(anime)
})

// PUT: Atualizar anime existente (AJUSTADO PARA TODOS OS CAMPOS)
route.put("/:id", (req, res) => {
    const { id } = req.params
    const { nome, genero, ano } = req.body
    
    if (!nome || !genero || !ano) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios para atualização" })
    }
    
    const updatedAnime = animeService.update(id, { nome, genero, ano })
    if (!updatedAnime) return res.status(404).json({ message: "Anime não encontrado" })
    
    res.json(updatedAnime)
})

// DELETE: Remover anime
route.delete("/:id", (req, res) => {
    const { id } = req.params
    const deletedAnime = animeService.delete(id)
    
    if (!deletedAnime) return res.status(404).json({ message: "Anime não encontrado" })
    
    res.json({ message: `Anime '${deletedAnime.nome}' deletado com sucesso` })
})

export default route