const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PlantaoSchema = new mongoose.Schema({
    codigo: Number,
    farmaciaid: Number,
    datainicio: Date,
    datafim: Date,
    github_username: String,
    avatar_url: String,
    bio: String,
    techs: Array,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }

});

module.exports = mongoose.model('Plantao', PlantaoSchema);