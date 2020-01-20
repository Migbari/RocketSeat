// Importam  o módulo de roteamento do express
const { Router } = require('express');

const DevController = require('./controllers/DevController');

// Acessa os métodos que estavam em const app - get, put, delete
const routes = Router();


routes.post('/devs', DevController.store); //!!

// Exporta o objeto para que a aplicação identifique a rota
module.exports = routes;
