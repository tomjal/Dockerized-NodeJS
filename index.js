var express = require('express')
var app = express()

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressMongoCrud = require('express-mongo-crud');

mongoose.connect('database:27017/mongocrud');

var options = {
	host: `localhost:8081`
}

app.use(bodyParser.json());
app.use(expressMongoCrud(options)); 

app.get('/', function (req, res) {
  res.send('Works!')
})

app.listen(8081, function () {
  console.log('app listening on port 8081!')
})