
const Plantao = require('../models/Pantao');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const plantoes = await Plantao.find().populate('farmacia').limit(4);
        return response.json(plantoes);
    }
};
