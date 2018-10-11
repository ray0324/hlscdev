const Router = require('koa-router');
const index = require('../controllers/index');
const release = require('../controllers/release');

const defaultRouter = new Router();

defaultRouter.get('/', index);
defaultRouter.get('/release', release);
module.exports = defaultRouter;
