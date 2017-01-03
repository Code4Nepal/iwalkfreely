var mongoose = require('mongoose');

module.exports.postStory = function(req, res){
	console.log('hello from server side');
	console.log(req.body);
}