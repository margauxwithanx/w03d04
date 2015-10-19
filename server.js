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

app.post('/posts/new', function(request, response){
   console.log(request.body);
   var newPost = post.create(request.body, function(error, newPost){
     console.log(newPost);
   });

   response.json(newPost);
 });

var server = app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});

