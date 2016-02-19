var express = require('express');
var router = express.Router();
var pageDefaultData = require('../data/pageDefaults.data.js');
var productListData = require('../data/test/productList.js');

/* GET home page. */
router.get('/plp', function(req, res, next) {
	var data = Object.create(pageDefaultData);

	data.title = 'Product in the catalogue | My shop';
	data.bodyId = 'plp';
	data.bodyClass = 'plp';
	data.products = productListData.products;

	res.render('pages/plp/plp', data);
});

module.exports = router;
