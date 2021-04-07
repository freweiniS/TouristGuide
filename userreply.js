const uuid = require('uuid-random');
const sqlite = require('sqlite');


async function openDb() {
  return sqlite.open({
    filename: './database.sqlite',
    driver: sqlite.Database,
  });
}

async function init() {
  const db = await openDb();
  await db.migrate(
                    {
                      migrationsPath: './db', //add cutom path to your migrations
                      force: 'last'
                    }
                  );
                }
const dbConn = init();
async function listMessages() {
  const db = await dbConn;
  return db.all('SELECT * FROM useranswer');
}

async function addMessage(placename,plandate,plantime) {
  const db = await dbConn;
  const id = uuid();
  await db.run('INSERT INTO useranswer VALUES (?,?,?,?)', [id, placename,plandate,plantime]);
  console.log(id, placename,plandate,plantime);
}
module.exports = {
  listMessages,
  addMessage,
};
