var express 			= require('express');
var mongoose			= require('mongoose');
var bodyParser 		= require('body-parser');


var postStories = require('./client/server/js/controllers/post-story-controller');


var app 					= express();


app.use(bodyParser.json());

app.post('/api/story/post', postStories.postStory);

console.log('reading from server.js')