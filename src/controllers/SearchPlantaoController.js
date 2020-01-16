const Plantao = require('../models/Pantao');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { datainicio, datafim } = request.query;

        const plantoes = await Plantao.find({
            $and: [
                { datainicio: { $lte: datainicio } },
                { datafim: { $gte: datafim } }
            ]
        });
        return response.json({ plantoes });
    }
}