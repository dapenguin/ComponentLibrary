var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		title: 'Component Library',
		components: [
			{
				name: 'header',
				description: 'The main site header',
				partial: 'header',
				data: {}
			},
			{
				name: 'product',
				description: 'A product',
				partial: 'product',
				data: {
					name: 'Beer',
					price: '£1.99',
					promotions: [
						'BOGOF',
						'Save 50p'
					]
				}
			}
		]
	};

	res.render('pages/componentLibrary', data);
});

module.exports = router;
