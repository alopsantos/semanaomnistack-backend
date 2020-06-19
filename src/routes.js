const {Router} = require('express');
const PlantaoController = require('./controllers/PlantaoController');
const PlantoesController = require('./controllers/PlantoesController');
const SearchPlantaoController = require('./controllers/SearchPlantaoController');
const FarmaciaController = require('./controllers/FarmaciaController');
const SearchFarmaciaController = require('./controllers/SearchFarmaciaController');
const routes = Router();

routes.get('/plantao', PlantaoController.index);
routes.get('/plantoes', PlantoesController.index);
routes.post('/plantoes/:farmaciaid', PlantaoController.store);
routes.put('/plantao/:id', PlantaoController.update);
routes.delete('/plantao/:id', PlantaoController.delete);

routes.get('/searchplantao', SearchPlantaoController.index);

routes.get('/farmacias', FarmaciaController.index);
routes.post('/farmacias', FarmaciaController.store);
routes.put('/farmacia/:id', FarmaciaController.update);
routes.delete('/farmacia/:id', FarmaciaController.delete);
routes.get('/searchfarmacia/:termo', SearchFarmaciaController.index);

module.exports = routes;