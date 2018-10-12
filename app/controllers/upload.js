// const multer = require('koa-multer');
const fs = require('fs');
const path = require('path');
const uploadDir = 'app/public/upload/';

module.exports = async function (ctx, next) {
  const files = ctx.request.files;
  const time = Date.now();
  const keys = Object.keys(files);
  await Promise.all(keys.map(key=>{
    const file = files[key];
    const src = fs.createReadStream(file.path);
    const ext = file.name.split('.').pop();
    const filePath = path.resolve(uploadDir, `${file.hash}.${ext}`);
    const dist = fs.createWriteStream(filePath);
    return new Promise(function (resolve, reject) {
      src.on('end', resolve);
      src.pipe(dist);
    });
  }));
  ctx.body = Date.now() - time;
};
