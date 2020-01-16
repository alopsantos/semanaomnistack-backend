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

/*"id": 1,
    "name": "Farmabelle",
    "phone": "4535412666",
    "urllogo": "http://www.lopscorp.com/logo/farmabelle.png",
    "address":{
		"street":"Av das Nações, 88",
		"city":"Santa Terezinha de Itaipu",
		"zipcode":"85875000",
		"neighborhood":"Centro",
		"geo":{
			"lat": "-33.1904",
			"lng": "-33.1904"
		}
	},
    "email": "farmabelle@hotmail.com"*/