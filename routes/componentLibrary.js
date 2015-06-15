var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// var data = {
	// 	title: 'Component Library',
	// 	productData: {
	// 		name: 'Beer',
	// 		price: '£1.99',
	// 		promotions: [
	// 			'BOGOF',
	// 			'Save 50p'
	// 		]
	// 	}
	// };

	var data = {
		components: [
			{
				name: 'header',
				description: 'The main site header',
				partial: 'header',
				data: {}
			},
			// {
			// 	name: 'buttons',
			// 	description: 'The different buttons used on the site',
			// 	partial: 'buttons'
			// },
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


	// for each component
	//   output component name
	//   output component description
	//   output component
	//   output component code

	res.render('pages/componentLibrary', data);
});

module.exports = router;
