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
        const { id } = request.params;
        const { name, phone, urllogo, address, email } = request.body;

        const addressArray = parseStringAsArray(address, address);
        const farmacia = await Farmacia.findByIdAndUpdate(id, {
            name,
            phone,
            urllogo,
            address: addressArray,
            email
        })
        return response.json(farmacia);
    },
    async delete(request, response){
        const { id } = request.params;
        const farmaciaExists = await Farmacia.findById(id);
        const result = farmaciaExists ? {message: `A Farmácia ${farmaciaExists.name} foi removida com sucesso!`} : {message: 'Farmácia não econtrada!'}


        if(farmaciaExists){
            await Farmacia.findByIdAndDelete(id);
        }
        
        return response.json(result);
                
    }
};