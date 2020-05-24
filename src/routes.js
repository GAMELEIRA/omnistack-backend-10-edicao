const { Router } = require('express');

const routes = Router();

const DevController = require('./controllers/DevController.js');

const BuscarDev = require('./controllers/BuscarDev.js');

routes.get("/devs", DevController.getDev);

routes.get("/search", BuscarDev.getDev);

routes.post('/devs', DevController.postDev);

module.exports = routes;