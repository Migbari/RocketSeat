const Dev = require('../models/Dev')
const parseStringAsArray = require('../uteis/parseStringAsArray')

module.exports = {
    async index(request, response) {
        // Buscar todos os devs num raio 10km
        // Filtrar por tecnologias
        // console.log(request.query);

        const { latitude, longitude, techs } = request.query;

        // Chama a função parseStringAsArray e converte techs do body da requisição (request.body)
        const techsArray = parseStringAsArray(techs);
        // Mostra o Array de techs no console
        // console.log(techsArray)

        // $in, $near, $geometry and $maxDistance são operadores lógicos dentro do MongoDB
        // Criou um filtro para localizar devs com techs espeficicas. Cria objeto techs e diz $in (dentro) de techsArray
        // $near - para encontrar objetos perto de uma localização    
        const devs = await Dev.find({
            techs: {
                $in: techsArray, 
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        
        return response.json({ devs });
    }
}
