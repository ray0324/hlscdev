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
  await Promise.all(Object.keys(files).map(key => {
    const file = files[key];
    const src = fs.createReadStream(file.path);
    const nameArr = file.name.split('.');
    const ext = nameArr.pop();
    const filename = `${nameArr.join('.')}-${file.hash.slice(0, 5)}.${ext}`;
    result[key] = `${conf.DOMAIN}/upload/${filename}`;
    const filePath = path.resolve(uploadDir, `${filename}`);
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
