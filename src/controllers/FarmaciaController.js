const Farmacia = require('../models/Farmacia');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const farmacias = await Farmacia.find();
        return response.json(farmacias);
    },
    async store(request, response) {
        const { name, phone, urllogo, address, email, latitude, longitude } = request.body;

        let farmacia = await Farmacia.findOne({ phone });

        if (!farmacia) {
            const addressArray = parseStringAsArray(address, address);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            farmacia = await Farmacia.create({
                name,
                phone,
                urllogo,
                address: addressArray,
                email,
                location,
            })
        }
        return response.json(farmacia);
    },
    async update(request, response){
        const { codigo } = request.params;
        const { name, phone, urllogo, address, email } = request.body;

        let farmacia = await Farmacia.findOne({ phone: codigo });

        if(!farmacia){
            return response.status(400).json({Atenção: 'Farmacia não cadastrada'});
        }
        const addressArray = parseStringAsArray(address, address);
        farmacia = await Farmacia.updateOne({
            name,
            phone,
            urllogo,
            address: addressArray,
            email
        })
        return response.status(200).json({ Atenção: 'Farmacia atualizada com sucesso.' });
    },
    async delete(request, response){
        const { codigo } = request.params;

        let farmacia = await Farmacia.findById({ _id: codigo });

        if(!farmacia){
            return response.status(400).json({Atenção: 'Farmacia não cadastrada'});
        }

        farmacia = await Farmacia.deleteOne();
        return response.status(200).json({ Atenção: 'Farmacia excluida com sucesso.' });
                
    }
};