const Router = require('koa-router');
const index = require('../controllers/index');
const release = require('../controllers/release');
const upload = require('../controllers/upload');

const router = new Router();

router.get('/', index);

router.post('/release', release.postRelease);
router.get('/release', release.show);

router.get('/query', release.query);
router.get('/latest', release.latest);

router.post('/upload', upload.doUpload);
router.get('/upload', upload.showUpload);

module.exports = router;
