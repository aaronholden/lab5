var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var addedFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/400/400/people"
	};
	console.log(addedFriend);
	data["friends"].push(addedFriend);
	res.render('add');
 }