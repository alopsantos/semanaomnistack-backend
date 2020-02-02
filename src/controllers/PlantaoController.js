
const Plantao = require('../models/Pantao');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const plantoes = await Plantao.findAll();
        if(!plantoes){
            return response.json({ Mensagem: "Nenhum Plantão foi cadastrado ainda, falar com Anderson!"});
        }
        return response.json(plantoes);
    },
    async store(request, response) {
        const { farmaciaid, datainicio, datafim } = request.body;

        plantao = await Plantao.create({
            farmaciaid,
            datainicio,
            datafim,
        });

        return response.json(request.body);
    },
    async update(request, response) {
        const { id } = request.params;
        const { datainicio, datafim, farmaciaid } = request.body;

        const plantao = await Plantao.findByIdAndUpdate(id, {
            datainicio,
            datafim,
            farmaciaid
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
