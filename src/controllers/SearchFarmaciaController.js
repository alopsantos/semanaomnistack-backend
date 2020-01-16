const Plantao = require('../models/Farmacia');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs, datainicio, datafim } = request.query;

        const techsArray = parseStringAsArray(techs);

        const plantoes = await Plantao.find({
            $and: [
                { datainicio: { $lte: datainicio } },
                { datafim: { $gte: datafim } }
            ]
        });

        return response.json({ plantoes });
    }
}