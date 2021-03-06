// Importe que informa a library o formato da entidade dev dentro da base de dados
const mongoose = require('mongoose'); 

// Importou objeto PointSchema 
const PointSchema = require('./uteis/PointSchema');

// Schema - Estrutura de uma entidade no banco de dados. 
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema, 
        index: '2dsphere', 
        // Indice para ponto de latitude e longitude
    }
}); // Padrão quando criamos um model

// Exporta model com 1º parametro 'Dev' nome que será salvo no banco e 2º sua estrutura.
module.exports = mongoose.model('Dev', DevSchema)

