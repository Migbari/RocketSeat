const mongoose = require('mongoose');

// Esquema de ponto no mapa
const PointSchema = new mongoose.Schema({
    // Retirado da própria documentação do MongoDB
    type:{
        type: String,
        enum: ['Point'],
        required: true,
    },
    // Para armazenar a latitude e longitude criou um array Number. Required: true - Obrigatório
    coordinates: {
        type: [Number],
        required: true,    
 },
});

module.exports = PointSchema;

