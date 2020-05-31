const express = require('express');
const fs = require('fs');
var bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());

// app
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.render("pages/index", {});
});


app.listen(8000);
console.log('8000 is the magic port');
