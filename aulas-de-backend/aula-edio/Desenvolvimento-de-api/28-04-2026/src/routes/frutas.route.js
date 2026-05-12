import { Router } from 'express'
import { frutasService } from '../services/frutas.service.js'

export const frutasRoute = Router()

frutasRoute.get("/", async (req, res) => {
    const frutas = await frutasService.getAll()
    res.json(frutas)
})

//crie rotas Rotas getById, put, patch, post e delete

frutasRoute.get("/:id", async (req, res) => {
    const { id } = req.params
    const fruta = await frutasService.getById(id)
    res.json(fruta)
})          

frutasRoute.post("/", async (req, res) => {
    const { nome} = req.body
    const newFruta = await frutasService.create(nome)
    res.status(201).json(newFruta)
})

frutasRoute.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome} = req.body
    const updatedFruta = await frutasService.update(id, nome)
    res.json(updatedFruta)
})

frutasRoute.delete("/:id", async (req, res) => {
    const { id } = req.params
    await frutasService.delete(id)
    res.status(204).end()
})

// src/routes/vendasRoutes.js

import express from 'express';
import { pool } from '../config/db.js';

const router = express.Router();

// Buscar frutas compradas por um cliente
router.get('/:clienteId', async (req, res) => {
    try {

        const { clienteId } = req.params;

        const query = `
            SELECT
                clientes.nome AS cliente,
                frutas.nome AS fruta
            FROM vendas
            JOIN clientes
                ON vendas.cliente_id = clientes.id
            JOIN frutas
                ON vendas.fruta_id = frutas.id
            WHERE clientes.id = $1
        `;

        const result = await pool.query(query, [clienteId]);

        res.status(200).json(result.rows);

    } catch (error) {

        res.status(500).json({
            erro: 'Erro ao buscar vendas'
        });

    }
});

export default router;