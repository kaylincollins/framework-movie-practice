const rp = require('request-promise');
const Promise = require('bluebird');
const API = require('./api_key.js'); 

module.exports.fetchData = (req, response, next) => {
  var options = {
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API.APIkey.key}`,
    method: 'GET'
  }

  rp(options).then(function(body) {
    var data = JSON.parse(body).results;
    response.send(JSON.stringify(data));
      
  }).catch(function(err) {
      next();
  })

}

// module.exports.fetchData = (req, res, next) => {
//   var options = {
//     url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API.APIkey.key}`,
//     method: 'GET'
//   }

//   request(options, function(err, response, body) {
//     if(err) {
//       next();
//     } else {
//       req.data = JSON.parse(response.body).results;
      
//       res.end(JSON.stringify(req.data));
//       next();
//     }
//   })
// }