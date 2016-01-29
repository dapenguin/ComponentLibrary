var express = require('express');
var router = express.Router();

var headerData = require('../data/test/header.js');
var productListData = require('../data/test/productList.js');

/* GET home page. */
router.get('/cl', function(req, res, next) {
	var data = {
		title: 'Component Library',
		layout: 'componentLibrary',
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
				id: 'paginationBar',
				name: 'Pagination Bar',
				description: '<p>The control for sorting and paging throught a list of items</p>',
				partial: 'paginationBar',
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

	res.render('pages/componentLibrary/componentLibrary', data);
});

/* GET component test page. */
router.get('/componentTest', function(req, res, next) {
	var headerFiveItems = {
		siteName: 'Website name',
		navItems: [
			{
				text: 'Products',
				href: 'plp'
			},
			{
				text: 'Services',
				href: '#'
			},
			{
				text: 'About us',
				href: '#'
			},
			{
				text: 'Contact us',
				href: '#'
			},
			{
				text: 'FAQ',
				href: '#'
			}
		]
	};

	var headerThreeItems = {
		siteName: 'Website name',
		navItems: [
			{
				text: 'Products',
				href: 'plp'
			},
			{
				text: 'Services',
				href: '#'
			},
			{
				text: 'Contact us',
				href: '#'
			}
		]
	};

	var headerNoItems = {
		siteName: 'Website name'
	};

	var data = {
		title: 'Component Test',
		layout: 'componentTesting',
		partial: 'header',
		variants: [
			{
				data: headerFiveItems
			},
			{
				data: headerThreeItems
			},
			{
				data: headerNoItems
			}
		]
	};

	res.render('pages/componentTest/componentTest', data);
});

module.exports = router;
