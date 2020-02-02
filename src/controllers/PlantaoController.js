
const Plantao = require('../models/Pantao');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
<<<<<<< HEAD
        const plantoes = await Plantao.findAll();
        if(!plantoes){
            return response.json({ Mensagem: "Nenhum Plantão foi cadastrado ainda, falar com Anderson!"});
=======
        const plantoes = await Plantao.find();
        if(!plantoes){
            return response.status(401).json({ Mensagem: "Nenhum plantão cadastrado ainda, falar com Anderson!" });
>>>>>>> 1fb8db87c70e88691ebd67f23a26e4e4dbb6c3e5
        }
        return response.json(plantoes);
    },
    async store(request, response) {
        const { farmaciaid, datainicio, datafim } = request.body;

        plantao = await Plantao.create({
            farmaciaid,
<<<<<<< HEAD
=======
            farmacia,
>>>>>>> 1fb8db87c70e88691ebd67f23a26e4e4dbb6c3e5
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
