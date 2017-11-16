const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('../lib/movieAPI.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });


var movies = [
    {title: 'Mean Girls', watched: false},
    {title: 'Hackers', watched: false},
    {title: 'The Grey', watched: false},
    {title: 'Sunshine', watched: false},
    {title: 'Ex Machina', watched: false},
  ];

app.get('/load', helpers.fetchData, function(req, res) {
  res.end('error');
})

app.get('/movies', function(req, res) {
  res.send(movies);
})

app.post('/movies', function(req, res) {
  movies.push(req.body);
  res.send(movies);
})

