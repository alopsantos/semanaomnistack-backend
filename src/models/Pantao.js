const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PlantaoSchema = new mongoose.Schema({
    codigo: Number,
    farmaciaid: String,
    datainicio: Date,
    datafim: Date,
});

module.exports = mongoose.model('Plantao', PlantaoSchema);