const routes = require('express').Router();
const { getRepo } = require('./controllers/repo.controller');

routes.get('/', getRepo);

module.exports = routes;
