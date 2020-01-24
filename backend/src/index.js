const express = require('express'); // Importou o modulo express
const mongoose = require('mongoose'); 
const cors = require('cors')
const routes = require('./routes'); // importou as rotas em route.js


// Inicializar a aplicação, colocar o servidor no ar. Ou seja, criamos rota
const app = express(); 

mongoose.connect('mongodb+srv://omnistack:miguelbatista@cluster0-w3uk9.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex :  true ,
});
app.use(cors({ origin: 'http:localhost:3000' }))
// Para que o express entenda requisições no formato JSON - sempre antes das rotas 
app.use(express.json()); 
app.use(routes); 

// Definimos a porta para rodar a aplicação 
app.listen(3333);

