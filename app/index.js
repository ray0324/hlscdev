const Koa = require('koa');
const koaStatic = require('koa-static');
const views = require('koa-views');
const koaBody = require('koa-body');
// const path = require('path');
const onerror = require('./middlewares/onerror');
const routes = require('./routes');
const db = require('./services/db');

db.load().then(() => {
  console.log('db loaded.');
}).catch(err => {
  console.log(err.message);
});

// 创建Koa实例
const app = new Koa();
// middlewares
// app.use(cors());
app.use(onerror);
// app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));
// app.use(json());

app.use(koaBody({
  multipart: true,
  formidable: {
    // uploadDir: path.join(__dirname, 'public/upload/'),
    hash: 'md5',
    maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}));

app.use(koaStatic(__dirname + '/public'));
app.use(views(__dirname + '/views', { extension: 'pug' }));
app.use(routes.routes(), routes.allowedMethods());

module.exports = app;
