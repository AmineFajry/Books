var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db'
});
 

/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.connect();

    connection.query('SELECT * FROM books', function (error, results, fields) {
    const name = req.query.name;
    if (error) throw error;
    res.send(results);
    console.log('The solution is: ', results[0].solution);
    });
    
    
    connection.end();
});


module.exports = router;



