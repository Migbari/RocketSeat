// Importa a biblioteca axios para consumir outras APIs
const axios = require('axios');
// Importa model dev.js 
const Dev = require('../models/Dev');

module.exports = {
    async store (request, response) {
        // Desestruturação de github_username pela request boby - corpo da requisição
        const { github_username, techs, latitude, longitude } = request.body; 
    
        // Response da api do github 
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
        // Desestruturação de pela apiResponse.
        const {name = login, avatar_url, bio} = apiResponse.data
        // console.log(name, avatar_url, bio, github_username);
    
        // Indica proximo item com split(','), percorre techs com map e .trim() remove espaços 
        const techsArray = techs.split(',').map(techs => techs.trim());
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        });
    
    return response.json(dev)  
    }
};