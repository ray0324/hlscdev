const Koa = require('koa');
const koaStatic = require('koa-static');
const views = require('koa-views');
const onerror = require('./middlewares/onerror');
const routes = require('./routes');

// 创建Koa实例
const app = new Koa();
// middlewares
// app.use(cors());
app.use(onerror);
// app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));
// app.use(json());
app.use(koaStatic(__dirname + '/public'));
app.use(views(__dirname + '/views', { extension: 'pug' }));
app.use(routes.routes(), routes.allowedMethods());

module.exports = app;
