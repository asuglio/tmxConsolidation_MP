var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 var PORT = 8080;
 var path = require('path');
 var connection = require('./connection.js');


//routes
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
//  });


app.get("/", function(req, res) {
   // console.log("server firing");
    connection.query("SELECT * FROM `tmx-alex`.`tmx-test`", function(err, data) {
        if (err) throw err;
        res.render("index", { seg: data });
    });
});


// app.get('/segments', function(req, res){

// connection.query("SELECT * from segments", function (err, result, fields) {
// if (err) throw err;

// //res.json(result[2].segEN);
// //resultString = JSON.stringify(result);

// res.send(result);


// //var info = result[2].segEN;

// //console.log("it is " + info);

//   });
// });

// app.get('/segments/:segID', function(req,res){

// connection.query("SELECT * from segments WHERE segID = ?", [req.params.segID], function (err, result, fields) {
// if (err) throw err;
// res.send(result[0].segEN);

// });

// });


app.listen(PORT || process.env, function() {
    console.log("app connected and firing!");
});




