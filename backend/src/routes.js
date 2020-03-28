const express = require('express');


const connection = require('./database/connection');

const routes = express.Router();

const OngsController = require('./controllers/OngsController')
const IncidentsController = require('./controllers/IncidentsController');
const ProfilerController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');


routes.use(express.json());


routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.get('/profile',ProfilerController.index);


module.exports = routes;