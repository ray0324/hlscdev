require('dotenv').config();

module.exports = {
  PORT: process.env.PORT, // 启动端口
  LOG_LEVEL: process.env.LOG_LEVEL // 日志级别
};
