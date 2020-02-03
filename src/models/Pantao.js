const mongoose = require('mongoose');

const PlantaoSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
    codigo: Number,
    datainicio: Date,
    datafim: Date,
    farmacia_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmacia'
>>>>>>> 7daaba2cc1a3ac04af58602cf051473205b3d801
    }
});

module.exports = mongoose.model('Plantao', PlantaoSchema);