const { Router } = require('express');
const middleware = require('./middlewares');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ItemController = require('./controllers/ItemController');
const ProfileController = require('./controllers/ProfileController');

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.index);
routes.get('/users/:email', UserController.indexSpecific);
routes.patch('/users', middleware.auth, UserController.update);
routes.delete('/users', middleware.auth, UserController.delete);

routes.post('/users/auth', SessionController.create);

routes.post('/items', middleware.auth, ItemController.create);
routes.delete('/items/:_id', middleware.auth, ItemController.delete);

routes.get('/profile/:user', ProfileController.index);

module.exports = routes;


// criar items
// deletar items
// apresentar items do usuário para o usuário
// apresentar items do usuário externamente

