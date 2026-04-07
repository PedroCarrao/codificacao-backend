// Mock de dados

const fruits = [
    { id: 1, nome: "Maça" },
    { id: 2, nome: "Pera" }
]

class FruitService {
    getAll() {
        return fruits
    }

    getById(id) {
        return fruits.find(f => f.id === parseInt(id))
    }

    create(nome) {
        const newFruit = {
            id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
            nome
        }
        fruits.push(newFruit)
        return newFruit
    }

    update(id, nome) {
    const index = fruits.findIndex(f => f.id === parseInt(id))

    if (index === -1) return null

    fruits[index].nome = nome
    return fruits[index]
    }

    delete(id) {
    const index = fruits.findIndex(f => f.id === parseInt(id))

    if (index === -1) return null

    const removed = fruits.splice(index, 1)
    return removed[0]
    }

}



export const fruitService = new FruitService()