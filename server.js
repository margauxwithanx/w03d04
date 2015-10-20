// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");
    mongoose = require("mongoose");

var db = require('./models');

// console.log("models running!");

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));

  // from index.ejs: <script src="/static/js/app.js"></script>
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// //connecting mongoose
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/w03d04");

// module.exports.post = require("./post.js");

//ROUTES
//render index page
app.get('/', function (req, res) {
  //res.send('Yo homies!');
  db.Post.find({}, function (err,posts){
  	if (err) {
  		console.log(err);
  		return res.sendStatus(400);
  	}
  	res.render('index',{posts: posts}); 
  });
});

// route to read all blog posts: GET /api/posts
app.get('/api/posts', function (req,res) {
	db.Post.find(function (err, posts) {
	if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
		res.json(posts);
	});
});

//POST route for new posts
app.post('/api/posts', function (req, res){
	db.Post.create(req.body, function (err, post){
		if (err) {
			console.log(err);
		}
		res.json(post);
	});
});

// DELETE route for posts
app.delete('/api/posts/:id', function (req, res){
	db.Post.findOne( { _id: req.params.id } , function (err, post){
		if (err) {
			console.log(err);
		}
		post.remove(function(err){
			res.json(post);
		});
	});
});

// POST route for new comments
app.post('/api/posts/:id/comments', function (req, res){
	db.Post.findOne( { _id: req.params.id } , function (err, post){
		if (err) {
			console.log(err);
		}
		console.log(req.body);
		post.comments.push(req.body);
		post.save(function(err){
			if (err) {
				console.log(err);
			}
			res.json(post);
		});
	});
});

// render singlepost page
app.get('/posts/:id', function (req, res) {
	// console.log(req.params);
	db.Post.findById( { _id: req.params.id } , function (err, post){
		if (err) {
			console.log(err);
		}
			res.render('singlepost', { post: post } );
	});
});


//start the server on port 3000
var server = app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});