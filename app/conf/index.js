require('dotenv').config();

module.exports = {
  DOMAIN: process.env.DOMAIN, // 启动环境配置
  PORT: process.env.PORT, // 启动端口
  LOG_LEVEL: process.env.LOG_LEVEL // 日志级别
};
