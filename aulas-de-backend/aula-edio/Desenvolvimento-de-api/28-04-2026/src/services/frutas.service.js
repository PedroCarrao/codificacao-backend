import { pool } from "../config/db.js"

class FrutasService {
    async getAll() {
        try {
            const query = "SELECT * FROM fruta"
            const res = await pool.query(query)
            return res.rows
        } catch (error) {
            console.error(error)
        }
    }
}

export const frutasService = new FrutasService()

frutasService.getById = async (id) => {
    try {
        const query = "SELECT * FROM fruta WHERE id = $1"
        const res = await pool.query(query, [id])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}

frutasService.create = async (nome, cor, preco) => {
    try {
        const query = "INSERT INTO fruta (nome) VALUES ($1) RETURNING *"
        const res = await pool.query(query, [nome])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}   

frutasService.update = async (id, nome) => {
    try {
        const query = "UPDATE fruta SET nome = $1 WHERE id = $2 RETURNING *"
        const res = await pool.query(query, [nome, id])
        return res.rows[0]
    } catch (error) {
        console.error(error)
    }
}

frutasService.delete = async (id) => {
    try {
        const query = "DELETE FROM fruta WHERE id = $1"
        await pool.query(query, [id])
    } catch (error) {
        console.error(error)
    }
}
