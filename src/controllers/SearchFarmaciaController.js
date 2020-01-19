const Farmacia = require('../models/Farmacia');

module.exports = {
    async index(request, response) {
        const { termo } = request.headers;

        const farmacias = await Farmacia.find({
            /*$and: [
                { datainicio: { $lte: datainicio } },
                { datafim: { $gte: datafim } }
            ]*/
            //name:  {$regex: /.*name.*/}
            //name: {$regex: /${{name}}/}
            //name: { $regx: `"{${name}}"` }
            name: termo
        });

        if(!farmacias){
            return response.status(404).json({Atenção: 'Farmacia não localizada'});
        }
        console.log(request.query);
        return response.json(farmacias);
    }
}