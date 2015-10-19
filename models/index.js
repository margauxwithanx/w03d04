var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/w03d04");

module.exports.post = require("./post.js");
