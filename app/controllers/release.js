const logger = require('../services/logger');
const db = require('../models/db');
module.exports = async function (ctx, next) {
  console.log(db);
  logger.info('route:release');
  // Release.insert({
  //   system: 'ios',
  //   version: 'v1.0.0',
  //   date: '2018-09-29',
  //   url: 'http://url'
  // }).then(function (r) {
  //   console.log(r);
  //   const w = Release.new({
  //     system: 'ios',
  //     version: 'v1.0.0',
  //     date: '2018-09-29',
  //     url: 'http://url'
  //   });
  //   Release.save(w);
  // });

  // Release.save(r, function (d) {
  //   console.log(d);
  // });

  // console.log(r);

  await ctx.render('release', { CURENT_PAGE: 'release' });
};
