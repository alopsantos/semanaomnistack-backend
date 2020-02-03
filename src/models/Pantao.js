const mongoose = require('mongoose');

const PlantaoSchema = new mongoose.Schema({
    codigo: Number,
    datainicio: Date,
    datafim: Date,
    farmacia_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia',
        require: true,
    }
});

module.exports = mongoose.model('Plantao', PlantaoSchema);