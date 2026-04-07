// Mock de dados inicial
const animes = [
    { id: 1, nome: "Naruto", genero: "Shonen", ano: 2002 },
    { id: 2, nome: "Dragon Ball Z", genero: "Ação", ano: 1989 }
    // ... outros itens
]

class AnimeService {
    getAll() {
        return animes
    }

    getById(id) {
        return animes.find(a => a.id === parseInt(id))
    }

    // Recebe o objeto 'data' enviado pela rota
    create(data) {
        const { nome, genero, ano } = data
        
        const newAnime = {
            id: animes.length > 0 ? animes[animes.length - 1].id + 1 : 1,
            nome,
            genero,
            ano
        }
        
        animes.push(newAnime)
        return newAnime
    }

    // Atualiza recebendo o objeto completo para não perder dados
    update(id, data) {
        const { nome, genero, ano } = data
        const index = animes.findIndex(a => a.id === parseInt(id))
        
        if (index !== -1) {
            animes[index] = { 
                id: parseInt(id), 
                nome, 
                genero, 
                ano 
            }
            return animes[index]
        }
        return null
    }

    delete(id) {
        const index = animes.findIndex(a => a.id === parseInt(id))
        if (index !== -1) {
            return animes.splice(index, 1)[0]
        }
        return null
    }
}

export const animeService = new AnimeService()