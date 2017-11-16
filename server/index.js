const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('../lib/movieAPI.js');
const db = require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

app.get('/load', helpers.fetchData, db.saveAllData, function(req, res) {
  res.end('error');
})

app.get('/movies', function(req, res) {
  res.send(movies);
})

app.post('/movies', db.saveMovie, db.sendAllMovies, function(req, res) {
  res.end();
})

