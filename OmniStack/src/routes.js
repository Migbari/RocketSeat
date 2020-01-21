// Importam  o módulo de roteamento do express
const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
// Acessa os métodos que estavam em const app - get, put, delete
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store); 
routes.get('/search', SearchController.index);

// Exporta o objeto para que a aplicação identifique a rota
module.exports = routes;
