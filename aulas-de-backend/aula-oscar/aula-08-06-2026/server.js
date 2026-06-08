import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const PORT = process.env.PORT || 3000

let chats = [
    {id:"order-101",
        orderStatus: "A caminho",
        driver:{ name: "Carlos Billagran", phone: "(11) 99999-88888"},
        customer: {name: "Ana Souza"},
        messages: [
            {id : 1 , sender:"system", text:"Pedido em proceso ...", timestemp: "22:05" },
            {id: 2, sender:"driver", text:"Ola Ana estou a caminho...",  timestemp:" 19:05"},
        ]

}];

// ------------Rotas da api------------ //

//listar todos os chats/pedidos ativos
app.get('api/chats/:orderID', (req,res)=>{
    res.json(chats);
})
//buscar s detalhes de um chat especifico

app.get('api/chats/:orderID', (req,res)=>{
    const chat = chats.find (c=>c.id === res.params.orderID);
    if (!chat){
        return res.status(404).json({error: "Chat/Pedido não encontrado"})
    }
    res.json(chat);
})

//enviar uma mensagem nova

app.post('/api/chats/:orderID/messages', (req, res)=>{
    const{orderID}
})