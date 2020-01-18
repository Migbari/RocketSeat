// Importam  o módulo de roteamento do express
const { Router } = require('express');
// Importa a biblioteca axios para consumir outras APIs
const axios = require('axios');
// Importa model dev.js 
const Dev = require('./models/Dev');

// Acessa os métodos que estavam em const app - get, put, delete
const routes = Router();

// Métodos HTTP get, post, put, delete
// async 
routes.post('/devs', async (request, response)=> {
    // Desestruturação de github_username pela request boby - corpo da requisição
    const { github_username, techs } = request.body; 

    // Response da api do github 
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    // Desestruturação de pela apiResponse.
    const {name = login, avatar_url, bio} = apiResponse.data
    // console.log(name, avatar_url, bio, github_username);

    // Indica proximo item com split(','), percorre techs com map e .trim() remove espaços 
    const techsArray = techs.split(',').map(techs => techs.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

return response.json(dev)  
});
// Exporta o objeto para que a aplicação identifique a rota
module.exports = routes;
