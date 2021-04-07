const uuid = require('uuid-random');
const sqlite = require('sqlite');

async function init() {
  const db = await sqlite.open('./database.sqlite', { verbose: true });
  await db.migrate({ migrationsPath: './db' });
  return db;
}

const dbConn = init();

async function listMessages() {
  const db = await dbConn;
  return db.all('SELECT * FROM useranswer');
}
