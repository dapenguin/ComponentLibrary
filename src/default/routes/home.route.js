var express = require('express');
var router = express.Router();
var pageDefaultData = require('../data/pageDefaults.data.js');

/* GET home page. */
router.get('/home', function(req, res, next) {
	var data = Object.create(pageDefaultData);

	data.title = 'Welcome to my shop!';
	data.bodyId = 'homepage';
	data.bodyClass = 'homepage';

	res.render('pages/home/home', data);
});

module.exports = router;
