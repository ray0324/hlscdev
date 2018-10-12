const Router = require('koa-router');
const index = require('../controllers/index');
const release = require('../controllers/release');
const upload = require('../controllers/upload');
const showUpload = require('../controllers/showUpload');

const defaultRouter = new Router();

defaultRouter.get('/', index);
defaultRouter.get('/release', release);
defaultRouter.post('/upload', upload);
defaultRouter.get('/upload', showUpload);
module.exports = defaultRouter;
