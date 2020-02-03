const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PlantaoSchema = new mongoose.Schema({
    farmacia:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia',
        require: true,
    },
    datainicio: {
        type: Date,
        require: true,
    },
    datafim: {
        type: Date,
        require: true,
    }
});

module.exports = mongoose.model('Plantao', PlantaoSchema);