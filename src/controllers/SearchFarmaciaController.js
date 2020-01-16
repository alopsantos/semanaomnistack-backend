const Farmacia = require('../models/Farmacia');

module.exports = {
    async index(request, response) {
        const { name, datainicio, datafim } = request.query;
        
        const farmacias = await Farmacia.find({
            /*$and: [
                { datainicio: { $lte: datainicio } },
                { datafim: { $gte: datafim } }
            ]*/
        //name:  {$regex: /.*name.*/}
        //name: {$regex: /${{name}}/}
    name: {$regex: /${{name}}/}
        });

        return response.json({ farmacias });
    }
}