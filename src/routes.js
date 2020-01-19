const {Router} = require('express');
const PlantaoController = require('./controllers/PlantaoController');
const SearchPlantaoController = require('./controllers/SearchPlantaoController');
const FarmaciaController = require('./controllers/FarmaciaController');
const SearchFarmaciaController = require('./controllers/SearchFarmaciaController');
const routes = Router();

routes.get('/plantoes', PlantaoController.index);
routes.post('/plantoes', PlantaoController.store);
routes.put('/plantao/:codigo', PlantaoController.update);
routes.delete('/plantao/:codigo', PlantaoController.delete);
routes.get('/searchplantao', SearchPlantaoController.index);

routes.get('/farmacias', FarmaciaController.index);
routes.post('/farmacias', FarmaciaController.store);
routes.put('/farmacia/:id', FarmaciaController.update);
routes.delete('/farmacia/:id', FarmaciaController.delete);
routes.get('/searchfarmacia/:termo', SearchFarmaciaController.index);

module.exports = routes;