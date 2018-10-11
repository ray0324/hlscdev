const Database = require('warehouse');
const path = require('path');

const DB_PATH = path.resolve('./', 'fixtures/db.json');
const db = new Database({ path: DB_PATH });

module.exports = db;
