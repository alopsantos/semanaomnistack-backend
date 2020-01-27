const mongoose = require('mongoose');

const PlantaoSchema = new mongoose.Schema({
    codigo: Number,
    datainicio: Date,
    datafim: Date,
    farmacia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia'
    }
});

module.exports = mongoose.model('Plantao', PlantaoSchema);