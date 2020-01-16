// Necessário importar a biblioteca express para ter acesso a suas funcionalidades
// Definimos uma variável e importamos o modulo express
const express = require('express');

// Inicializar a aplicação, colocar o servidor no ar. Ou seja, criamos rota
const app = express(); 
app.use(express.json()); // para que o express entenda requisições no formato JSON

// Métodos HTTP get, post, put, delete
app.post('/users', (request, response)=> {
        
    console.log(request.body); 
    return response.json({message: 'Hello world '}) 
       
});

// Definimos a porta para rodar a aplicação 
app.listen(3333) 

