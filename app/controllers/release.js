const Schema = require('validate');
const logger = require('../services/logger');
const db = require('../services/db');
const Release = require('../models/release');

// 展示发布表单
async function show (ctx, next) {
  logger.info('route:release');
  await ctx.render('release', { CURENT_PAGE: 'release' });
};

// 提交发布信息
async function postRelease (ctx, next) {
  logger.info('route:postRelease');
  const release = new Schema({
    system: { type: String, enum: ['ios', 'android'] },
    env: { type: String, enum: ['test', 'prod'] },
    version: { type: String, required: true },
    date: { type: String, match: /^\d{4}-\d{2}-\d{2}$/, required: true },
    url: { type: String, required: true },
    desc: { type: String }
  });

  const body = ctx.request.body;
  const errors = release.validate(body);
  // console.log(errors);
  if (errors.length > 0) {
    logger.error(errors[0].message);
    return ctx.body = errors[0].message;
  }
  await Release.insert(body);
  await db.save();
  ctx.body = 'ok';
};

// 查询
async function query (ctx, next) {
  logger.info(ctx.request.query);
  const result = await Release.find(ctx.request.query).sort('date', -1);
  ctx.body = result;
}

// 查询最新的
async function latest (ctx, next) {
  logger.info(ctx.request.query);
  const result = await Release.find(ctx.request.query).sort('date', 1).last();
  logger.info(result);
  ctx.body = result || {};
}

module.exports = {
  show,
  latest,
  query,
  postRelease
};
