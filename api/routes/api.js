"use strict"

const express = require('express')
const router = express.Router();

const Post = require('../models/post');

// let entry = new Post({
// 	comments: [],
// 	content: 'Fill up those lakes!',
// 	title: "Hey, it's raining",
// 	subredditId: 'austin'
// });
//
// entry.save((err) => {if(err) console.log(err)});

router.get('/api/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');
	console.log(subredditId);

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		console.log(results);
		res.send(results);
	});
});

router.post('/api/new', (req, res) => {
	let title = req.body.title;
	let content = req.body.content;

	let entry = new Post({
		title: title,
		content: content,
		subredditId: 'austin',
		comments: []
	})

	entry.save((err, response) => {
		if(err) console.log(err);

		console.log('post saved');
	})
})

module.exports = router;
