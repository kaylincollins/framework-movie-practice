const mysql = require('mysql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   database : 'movielist'
// });


// module.exports.saveAllData = (req, response, next) => {
//   for(var i = 0; i < req.data.length; i++) {
//     var query = `INSERT INTO movies (title, description) VALUES ("${req.data[i].title}", "${req.data[i].overview}")`
//     connection.query(query, (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('saved!');
//       }
//     })
//   }
//   response.send(JSON.stringify(req.data))
// }

// module.exports.saveMovie = (req, res, next) => {
  
//   var query = `INSERT INTO movies (title) VALUES ("${req.body.title}")`
//   connection.query(query, (err, data) => {
//     if (err) {
//       res.status(500).send({ error: err });
//     } else {
//       next();
//     }
//   }) 
// }

// module.exports.sendAllMovies = (req, res, next) => {
//   var query = `SELECT * FROM movies`;
//   connection.query(query, (err, data) => {
//     if (err) {
//       res.status(500).send({ error: err });
//     } else {
//       console.log(data);
//       res.status(201).send(JSON.stringify(data));
//     }
//   })
// }

