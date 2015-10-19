var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("CONNECTED TO MONGO");
	console.log('');
	console.log('All Systems Go');
});

var Schema  = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	image: String,
	content: String,
	link: String,
	author: String
});

var Posts = mongoose.model('Post', PostSchema);

var post_list = [
	{title: "", image: "", content: "", link: "", author: ""},
	{title: "", image: "", content: "", link: "", author: ""},
	{title: "", image: "", content: "", link: "", author: ""},
	{title: "", image: "", content: "", link: "", author: ""}
];

Posts.remove({}, function(err, posts){

  Posts.create(post_list, function(err, posts){
    if (err) { return console.log(err); }
    console.log("created", posts.length);
  });

});







	// var mongoose = require("mongoose");

	// var Schema = mongoose.Schema;

	// var BlogSchema = new Schema({
	//     name: {
	//     	type: String,
	//     	require: true
	//     },
	//     textString: {
	//     	type: String,
	//     	require: true
	//     }
	// });

	// var Post = mongoose.model('Post', BlogSchema);
	// module.exports = Post;