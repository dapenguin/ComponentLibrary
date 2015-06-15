var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {
		title: 'Component Library',
		components: [
			{
				id: 'header',
				name: 'Header',
				description: '<p>The main site header</p>',
				partial: 'header',
				data: {}
			},
			{
				id: 'product',
				name: 'Product',
				description: '<p>A product</p>',
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
