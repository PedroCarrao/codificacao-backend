        fetch('https://jsonplaceholder.typicode.com/users')
                .then(reposta => reposta.json())
                .then 


    async function PesquisaDeNomesId(id) {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;


        const reposta = await fetch(url);

        if(!reposta.ok){
            throw new Error (`Erro buteco : ${reposta.status}`)
        }

        const post = await reposta.json();

        console.log(`Post encontrado com sucesso` , post)
    }

    PesquisaDeNomesId(2)

    