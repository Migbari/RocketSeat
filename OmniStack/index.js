// Necessário importar a biblioteca express para ter acesso a suas funcionalidades
// Definimos uma variável e importamos o modulo express
const express = require('express');

// Inicializar a aplicação, colocar o servidor no ar. Ou seja, criamos rota
const app = express(); // express é uma funçao
app.use(express.json()); // para que o express entenda requisições no formato JSON


// ex: wwww.ars.com/users - localhost:3333/users
// ex: / - localhost:3333
// O metodo get tem dois parametros, a rota e a function 
// a function tem dois parametros, request e response - request > pedido. response >resposta
// O usuario pede para o servidor (request) e o servidor devolve a resposta (response)
app.post('/users', (request, response)=> {
    // return response.send('Hello Word'); // send simplesmente envia texto como resposta
    
    console.log(request.body); // query param - maneira de fazer debug - aparece no terminal 
    return response.json({message: 'Hello world '}) 
    // Após o teste colocamos em json para que front e back se comunique
    // json deve se comunicar com um objeto ou vetor dentro do javascript
    // {"message":"Hello My World"} - formato de objeto
});
// Métodos HTTP get, post, put, delete

app.listen(3333) // definimos a porta para rodar a aplicação 

// Executamos node index.js no terminal para iniciar o servidor, verificamos a rota localhost:3333.
// paramos a aplicaçao no Crtl+C

// Tipos de parametros dentro do express

// http://localhost:3333/users/1
// Query Params: request.query (Filtros, ordenação, paginação, etc) - DEFINE OS PARAMETROS E VALORES DA BUSCA
// Route Params: // app.put('/users/:id') - identificar recurso na alteração ou remoção 
// Body: POST ou PUT - request.body - (Dados para criação ou alteração de um registro) - app.post('/users', (request, response)

