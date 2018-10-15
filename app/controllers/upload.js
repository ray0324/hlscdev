// const multer = require('koa-multer');
const fs = require('fs');
const path = require('path');
const conf = require('../conf');
const uploadDir = 'app/public/upload/';

async function showUpload (ctx, next) {
  await ctx.render('upload');
};

async function doUpload (ctx, next) {
  const files = ctx.request.files;
  let result = {};
  await Promise.all(Object.keys(files).map(key=>{
    const file = files[key];
    const src = fs.createReadStream(file.path);
    const ext = file.name.split('.').pop();
    result[key] = `${conf.DOMAIN}/upload/${file.hash}.${ext}`;
    const filePath = path.resolve(uploadDir, `${file.hash}.${ext}`);
    const dist = fs.createWriteStream(filePath);
    return new Promise(function (resolve, reject) {
      src.on('end', resolve);
      src.pipe(dist);
    });
  }));
  ctx.body = result;
};

module.exports = {
  showUpload,
  doUpload
};
