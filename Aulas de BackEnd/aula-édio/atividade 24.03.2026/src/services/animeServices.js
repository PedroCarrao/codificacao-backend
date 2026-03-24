const animes = [
    { id: 1, nome: "Naruto", genero: "Shonen", ano: 2002 },
    { id: 2, nome: "Dragon Ball Z", genero: "Ação", ano: 1989 },
    { id: 3, nome: "One Piece", genero: "Aventura", ano: 1999 },
    { id: 4, nome: "Charlotte", genero: "Drama/Sci-Fi", ano: 2015 },
    { id: 5, nome: "Code Geass", genero: "Mecha/Estratégia", ano: 2006 },
    { id: 6, nome: "Attack on Titan", genero: "Sombrio", ano: 2013 },
    { id: 7, nome: "Death Note", genero: "Suspense", ano: 2006 },
    { id: 8, nome: "Fullmetal Alchemist", genero: "Aventura", ano: 2009 },
    { id: 9, nome: "Demon Slayer", genero: "Fantasia", ano: 2019 },
    { id: 10, nome: "Jujutsu Kaisen", genero: "Sobrenatural", ano: 2020 },
    { id: 11, nome: "Hunter x Hunter", genero: "Aventura", ano: 2011 },
    { id: 12, nome: "My Hero Academia", genero: "Heróis", ano: 2016 },
    { id: 13, nome: "Bleach", genero: "Ação", ano: 2004 },
    { id: 14, nome: "Sword Art Online", genero: "Isekai", ano: 2012 },
    { id: 15, nome: "Cowboy Bebop", genero: "Sci-Fi", ano: 1998 },
    { id: 16, nome: "One Punch Man", genero: "Comédia/Ação", ano: 2015 },
    { id: 17, nome: "Tokyo Ghoul", genero: "Terror", ano: 2014 },
    { id: 18, nome: "Fairy Tail", genero: "Magia", ano: 2009 },
    { id: 19, nome: "Steins;Gate", genero: "Ficção Científica", ano: 2011 },
    { id: 20, nome: "Neon Genesis Evangelion", genero: "Psicológico", ano: 1995 }
]
class AnimeService {
    getAll() {
        return animes
    }
    getById(id) {
        return animes.find((anime) => anime.id === parseInt(id))
    }
}

export const animeService = new AnimeService()