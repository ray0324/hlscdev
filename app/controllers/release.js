const logger = require('../services/logger');
const db = require('../services/db');
const Release = require('../models/release');
module.exports = async function (ctx, next) {
  console.log(db);
  logger.info('route:release');
  const r = await Release.insert({
    system: 'ios',
    version: 'v1.0.0',
    date: '2018-09-29',
    url: 'http://url',
    desc: 'http://url'
  });
  await db.save();
  console.log(r);

  console.log(Release.find({}));

  await ctx.render('release', { CURENT_PAGE: 'release' });
};
