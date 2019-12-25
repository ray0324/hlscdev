const fs = require("fs");
const path = require("path");
const conf = require("../conf");
const logger = require("../services/logger");

const uploadDir = "app/public/upload/";

async function showUpload(ctx, next) {
  await ctx.render("upload");
}

async function doUpload(ctx, next) {
  const files = ctx.request.files;
  logger.info(files);
  const result = {};
  await Promise.all(
    Object.keys(files).map(key => {
      const file = files[key];
      logger.info(file.path);
      const readStream = fs.createReadStream(file.path);
      const nameArr = file.name.split(".");
      const ext = nameArr.pop();
      const filename = `${nameArr.join(".")}-${file.hash.slice(0, 5)}.${ext}`;
      // 返回web路径
      result[key] = `${conf.DOMAIN}/upload/${filename}`;

      const filePath = path.resolve(uploadDir, `${filename}`);
      const writeStream = fs.createWriteStream(filePath);
      return new Promise(function(resolve, reject) {
        readStream.on("end", resolve);
        readStream.on("error", err => reject(err.message));
        readStream.pipe(writeStream);
      });
    })
  );
  ctx.body = result;
}

module.exports = {
  showUpload,
  doUpload
};
