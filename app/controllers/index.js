const logger = require('../services/logger');
module.exports = async function (ctx, next) {
  logger.info('index');
  await ctx.render('index');
};
