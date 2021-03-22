//jshint esversion:6
const express = require("express");
const app = express();
app.use(express.static('client'));

app.listen(8080, function(){
  console.log("server started on port 8080");
});
