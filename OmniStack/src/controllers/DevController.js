// Importa a biblioteca axios para consumir outras APIs
const axios = require('axios');
// Importa model dev.js 
const Dev = require('../models/Dev');

const parseStringAsArray = require('../uteis/parseStringAsArray');

// Funçoes controller -- index(mostrar), show(mostrar-especifico), store(criar), update(atualizar), destroy(deletar) 

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        // Desestruturação de github_username pela request boby - corpo da requisição
        const { github_username, techs, latitude, longitude } = request.body;

        // Tratar duplicidade no banco 
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            // Response da api do github 
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            // Desestruturação de pela apiResponse.
            const { name = login, avatar_url, bio } = apiResponse.data
            // console.log(name, avatar_url, bio, github_username);

            // Indica proximo item com split(','), percorre techs com map e .trim() remove espaços 
            const techsArray = parseStringAsArray(techs);

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