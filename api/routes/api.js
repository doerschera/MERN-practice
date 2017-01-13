"use strict"

const express = require('express')
const router = express.Router();

const Post = require('../models/post');

// let entry = new Post({
// 	comments: [],
// 	content: '70 and sunny',
// 	title: "Love me some Austin winters",
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

router.get('/api/:subreddit/:id', (req, res) => {
	let id = req.params.id;
	console.log(id);

	Post.findById(id, (err, results) => {
		console.log(results);
		res.send(results);
	});
})

router.post('/api/:subreddit/new', (req, res) => {

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

		res.send(true);
		console.log('post saved');
	})
})

router.post('/api/:subreddit/:id/new', (req, res) => {
	let comment = req.body.comment;
	let id = req.params.id;

	console.log(comment, id);

	Post.findOneAndUpdate({_id: id}, {$push: {comments: comment}}).exec((err) => {
		if(err) console.log(err);
	})

})

module.exports = router;
