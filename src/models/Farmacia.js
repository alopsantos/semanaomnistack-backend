const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const FarmaciaSchema = new mongoose.Schema({
    name: String,
    phone: String,
    urllogo: String,
    address: Array,
    email: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Farmacia', FarmaciaSchema);