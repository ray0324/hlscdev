// const multer = require('koa-multer');
const fs = require('fs');
const path = require('path');
const conf = require('../conf');
const uploadDir = 'app/public/upload/';

module.exports = async function (ctx, next) {
  const files = ctx.request.files;
  // const time = Date.now();
  const keys = Object.keys(files);
  let result = {};
  await Promise.all(keys.map(key=>{
    const file = files[key];
    const src = fs.createReadStream(file.path);
    const ext = file.name.split('.').pop();
    result[key] = `${conf.ROOT_URL}/upload/${file.hash}.${ext}`;
    const filePath = path.resolve(uploadDir, `${file.hash}.${ext}`);
    const dist = fs.createWriteStream(filePath);
    return new Promise(function (resolve, reject) {
      src.on('end', resolve);
      src.pipe(dist);
    });
  }));
  ctx.body = result;
};
