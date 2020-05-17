const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index'); // displays layout  with 	<%- body %>	tag is replaces with this file in views.
});

module.exports = router;
