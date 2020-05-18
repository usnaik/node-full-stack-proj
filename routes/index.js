const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
	let books = [];
	try {
		books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec();
	} catch {
		books = [];
	}
	res.render('index', { books: books }); // displays layout  with 	<%- body %>	tag is replaces with this file in views.
});

module.exports = router;
