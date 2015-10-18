// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");


// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));

  // from index.ejs: <script src="/static/js/app.js"></script>
// body parser config to accept our datatypes
//app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  //res.send('Yo homies!');
  res.render('index');
});


var server = app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});

