console.log("Sanity Check: JS is working!");

$(document).ready(function(){

 // console.log("DEBUG: App starting...");

 	var app = new MyBlog();



});

function MyBlog(){
	this.entries = [];	//our backing array of entries

	// use JQuery selectors to find the important elements
	// (text box, button, list box)
	this.$pushMeButton = $('.btn');
	this.$entry = $('#myText');
	this.$blogDiv = $('.list-group');

	//assign onclick handler to button and connect to our createItem() function
	var blog = this;

	this.$pushMeButton.on('click', function(event){
		event.preventDefault();
		blog.createItem(blog.$entry.val());
	});

}

MyBlog.prototype.createItem = function(text){

	if (text == "")
		return ;
	
	this.entries.push(text);

	this.generateListItem(this.$entry);

	console.log("DEBUG: added entry: "+text);

}

MyBlog.prototype.removeItem = function(text){

	var txt = text.innerText;

	var idx = this.entries.indexOf(txt);
	if (idx != -1){
		this.entries.splice(idx, 1);
		console.log("DEBUG: removed entry: "+txt);
	}

}

MyBlog.prototype.generateListItem = function(entry){

	var html = "<li class='list-group-item'>" + this.$entry.val() + "<span class='glyphicon glyphicon-remove pull-right'></span></li>";

	this.$blogDiv.append(html);
	this.$entry.val('');
	
	var blog = this;
	$('.glyphicon-remove').on('click', function(event){
		console.log(event.target);
		//remove item from backing array
		blog.removeItem(this.parentElement);
		//use JQuery to remove list item from DOM
		this.parentElement.remove();
	})
}	

// debugging:
MyBlog.prototype.printEntries = function(){

	console.log(this.entries.toString());

}

