const request = require('request');
const Promise = require('bluebird');
const API = require('./api_key.js'); 

module.exports.fetchData = (req, res, next) => {
  var options = {
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API.APIkey.key}`,
    method: 'GET'
  }

  request(options, function(err, response, body) {
    if(err) {
      next();
    } else {
      req.data = JSON.parse(response.body).results;
      
      res.end(JSON.stringify(req.data));
      next();
    }
  })
}