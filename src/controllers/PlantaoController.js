
const Plantao = require('../models/Pantao');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const plantoes = await Plantao.find().populate('farmacia');
        return response.json(plantoes);
    },
    async store(request, response) {
        const { farmaciaid } = request.params;

        plantao = await Plantao.create({ ...request.body, farmacia: farmaciaid });

        return response.json(plantao.body);
    },
    async update(request, response) {
        const { id } = request.params;
        const { datainicio, datafim } = request.body;

        const plantao = await Plantao.findByIdAndUpdate(id, {
            datainicio,
            datafim,
        })
        return response.json(plantao);
    },
    async delete(request, response) {
        const { id } = request.params;
        const plantaoExists = await Plantao.findById(id);
        const result = plantaoExists ? { message: `O plantao ${plantaoExists.datainicio} foi removido com sucesso!` } : { message: 'Plantao não encontrado!' }

        if (plantaoExists) {
            await Plantao.findByIdAndDelete(id);
        }

        return response.json(result);

    }
};