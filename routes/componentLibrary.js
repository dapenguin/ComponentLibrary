var express = require('express');
var router = express.Router();

var headerData = require('../data/test/header.js');
var productListData = require('../data/test/productList.js');

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
				data: headerData
			},
			{
				id: 'fields',
				name: 'Form fields',
				description: '<p>The various form fields on the site</p>',
				partial: 'fields',
				data: {}
			},
			{
				id: 'buttons',
				name: 'Buttons',
				description: '<p>The different button styles on the site</p>',
				partial: 'buttons',
				data: {}
			},
			{
				id: 'productList',
				name: 'Product List',
				description: '<p>A list of products</p>',
				partial: 'productList',
				data: productListData
			}
		]
	};

	res.render('pages/componentLibrary', data);
});

module.exports = router;
