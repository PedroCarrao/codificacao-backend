## Step By Step Config Express Server

### Step 1: Organização de pastas
```
Crias as pastas
SRC
->routes
  -->animeRoutes.js
->serivces
  -->anime.service.js
->server.js

```

### Step 2: Instalar dependências
```
npm i express

e ficara assim.

06-04-2026/
├── src/
│   ├── routes/
│   │   └── animeRoutes.js
│   ├── services/
│   │   └── anime.service.js
│   └── server.js
├── api-client/ (onde você abrirá o Bruno)
└── package.json

```

### Step 3: Configurar o package.json

```
deixar o type: "module" e configurar o(s) scripts ex: (node --watch ./src/server.js)
```

### Step 4: Configurar o arquivo src/server.js

```
Configurar o servidor, ou seja, importar o express, configurar o middleware para ler o json, definir e executar a escuta da porta
O Server é a "Porta de Entrada" do seu sistema.
Suas principais funções são:
1. Iniciar o Express: Criar a aplicação que vai ouvir a internet.
2. Tradutor (Middleware): Usar o express.json() para que o Node entenda 
   o que você envia pelo Bruno/Thunder Client.
3. Direcionador: Receber a requisição e falar: "Isso aqui é sobre animes? 
   Então vai para o arquivo animeRoutes".
```

### Step 5: Configurar o arquivo O Serviço (./src/service/anime.service.js)

```
Configurar o servidor, ou seja, importar o express , configurar o middleware para ler o json, definir e executar a escuta da porta

O Service é o "Cérebro" e a "Regra de Negócio".
Suas principais funções são:
1. Manipular os dados: É o único lugar que mexe no array 'animes'.
2. Lógica: Decidir qual será o próximo ID e como os dados serão organizados.
3. Independência: Ele não sabe nada sobre HTTP ou Express. Ele apenas 
   recebe informações e devolve resultados. Se mudar o banco de dados 
   no futuro, você só mexe aqui.
```

### Step 7: Configurar o arquivo Rotas (./src/routes/animeRoutes.js)

```
Criação de rotas como getAll, put, delete e etc criando as receitas que o cozinheiro usa

As Rotas são os "Caminhos" e os "Verbos" da API.
Suas principais funções são:
1. Identificar a intenção: É um GET (listar), POST (criar) ou DELETE (remover)?
2. Validar os dados: Checar se o usuário enviou o nome, genero e ano 
   antes de tentar salvar.
3. Responder ao cliente: Enviar o Status 200 (Sucesso), 201 (Criado) 
   ou 404 (Não encontrado).
```

### Step 7: Estar dentro da pasta e/ou repositório
```
usar o npm run dev
```
### Step 8: Testar
```
Passo teste: Executar o servidor e testar as rotas no Bruno/Thunder Client
```