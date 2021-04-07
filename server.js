//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const uuid = require('uuid-random');
const sqlite = require('sqlite3').verbose();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/client'));
app.use(express.json());

let db = new sqlite.Database('users.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');

db.run('CREATE TABLE IF NOT EXISTS answer (id VACHAR PRIMARY KEY, placename TEXT NOT NULL, plandate DATE NOT NULL,plantime VARCHAR )' );
});
// routes
app.get('/api', (req, res)=> {
  let sql = `SELECT * FROM answer`;

  db.all(sql, [], (err, data) => {
    if (err) {
      throw err;
    }
res.json(data);
  });

});

app.post('/plan_created',(req, res) =>{
 const placename = req.body.placename;
 const plandate1 = req.body.plandate;
 const plantime = req.body.plantime;

 const id = uuid();

 let sql2 = "SELECT * FROM answer WHERE plandate ='"+ req.body.plandate + "' AND plantime ='"+ req.body.plantime + "'";

 db.all(sql2, [], (err, rows) => {

   if (rows.length>0) {

      res.sendFile(__dirname +"/client/error.html");
   }

 else {
 db.run('INSERT INTO answer VALUES (?,?,?,?)', [id, placename,plandate1,plantime]);
 console.log(id, placename,plandate1,plantime);

    res.sendFile(__dirname +"/client/plans.html");
  }
});
});





app.listen(8080, function(){
  console.log("server started on port 8080");
});
