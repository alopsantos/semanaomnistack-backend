const axios = require('axios');
const Plantao = require('../models/Pantao');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const plantoes = await Plantao.find();
        return response.json(plantoes);
    },
    async store(request, response) {
        const { codigo, farmaciaid, datainicio, datafim, github_username, techs, latitude, longitude } = request.body;

        let plantao = await Plantao.findOne({ github_username });

        if (!plantao) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs, techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            plantao = await Plantao.create({
                codigo,
                farmaciaid,
                datainicio,
                datafim,
                github_username,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(plantao);
    },
    async update(request, response){
        const { codigo } = request.params;
        const { farmaciaid, datainicio, datafim } = request.body;

        let plantao = await Plantao.findOne({ codigo });

        if(plantao){
            plantao = await Plantao.updateOne({
                farmaciaid,
            })
            return response.json(plantao);
        }
        
    },
    async delete(request, response){
        const { codigo } = request.params;

        let plantao = await Plantao.findOne({ codigo });

        if(!plantao){
            return response.status(400).json({Atenção: 'Plantao não cadastrada'});
        }
        plantao = await Plantao.deleteOne();
        return response.status(200).json({ Atenção: 'Plantao excluida com sucesso.' });
                
    }
};