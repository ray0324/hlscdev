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
  const body = ctx.request.body;
  await Release.insert(body);
  await db.save();
  ctx.body = 'ok';
};

// 查询
async function query (ctx, next) {
  logger.info(ctx.request.query);
  const result = await Release.find(ctx.request.query);
  ctx.body = result;
}

// 查询最新的
async function latest (ctx, next) {
  logger.info(ctx.request.query);
  const result = await Release.find(ctx.request.query).last();
  logger.info(result);
  ctx.body = result || {};
}

module.exports = {
  show,
  latest,
  query,
  postRelease
};
