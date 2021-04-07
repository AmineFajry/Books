var express = require('express');
var router = express.Router();

var mysql      = require('mysql');

function query(...args) {
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'my_db'
    });
    connection.connect();
    connection.query(...args);
    connection.end();
}


/* GET users listing. */
router.get('/', function(req, res, next) {

    

    query('SELECT * FROM books', function (error, results, fields) {
    
    if (error) throw error;
    res.send(results);
    console.log('The solution is: ', results[0].solution);
    });

   
});


router.post('/',function(req,res,next)
{
  var name = req.body.todoInput ;
  var description = req.body.txtdescription;
  var image = req.body.urlimage;

  console.log(image);

  query('INSERT INTO books (name,image,description) VALUES (?,?,?) ', [name, image, description], function (error, results, fields) {
    
    if (error) throw error;
    res.send(results);
    console.log('The solution is: ', results);
    });


});






module.exports = router;