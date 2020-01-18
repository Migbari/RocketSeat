// Necessário importar a biblioteca express para ter acesso a suas funcionalidades
// Definimos uma variável e importamos o modulo express
const express = require('express');
const mongoose = require('mongoose'); 

// Inicializar a aplicação, colocar o servidor no ar. Ou seja, criamos rota
const app = express(); 
const routes = require('./routes'); // importou as rotas em route.js

mongoose.connect('mongodb+srv://omnistack:miguelbatista@cluster0-w3uk9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Para que o express entenda requisições no formato JSON - sempre antes das rotas 
app.use(express.json()); 
app.use(routes); 

// Definimos a porta para rodar a aplicação 
app.listen(3333) 

