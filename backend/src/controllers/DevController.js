// Importa a biblioteca axios para consumir outras APIs
const axios = require('axios');
// Importa model dev.js 
const Dev = require('../models/Dev');

const parseStringAsArray = require('../uteis/parseStringAsArray');

// Funçoes controller -- index(mostrar), show(mostrar-especifico), store(criar), update(atualizar), destroy(deletar) 
module.exports = {
    // Rota listagem dos devs
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    // Rota criação devs
    async store(request, response) {
        // Desestruturação de github_username pela request boby - corpo da requisição
        const { github_username, techs, latitude, longitude } = request.body;
            
        // findOne() - Encontre UM dev baseado em github_username - Busca no bd o github_username da requisição. 
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            // Response da api do github armazenada na variável apiResponse
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            // Desestruturação de pela apiResponse.     
            const { name = login, avatar_url, bio } = apiResponse.data
            // console.log(name, avatar_url, bio, github_username);

            // Chama a função parseStringAsArray e converte techs do body da requisição (request.body)
            const techsArray = parseStringAsArray(techs);

            // type e coordinates são os objetos dentro de PointSchema
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location, 
            });

        }
        return response.json(dev)
    }
};