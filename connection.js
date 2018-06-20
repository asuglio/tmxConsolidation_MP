var mySQL = require('mysql');
var pw = require('./pw.js');


var connection = mySQL.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: pw,
    database: 'tmx-alex'
});


//connection.connect();
connection.connect(function(err) {
    if (err) throw err;
    console.log("DB connected");
  });



// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("SELECT * from segments", function (err, result, fields) {
//     if (err) throw err;

//     for (var i =0; i< result.length(); i++){
//     console.log(result[i].segEN);

//     console.log(result[i].segES);
// }
//   });
// });

module.exports = connection;