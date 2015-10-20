// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
// 	console.log("CONNECTED TO MONGO");
// 	console.log('');
// 	console.log('All Systems Go');
// });

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	newComment: String
});

var PostSchema = new Schema({
	newPost: String,
	comments: [CommentSchema]
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;