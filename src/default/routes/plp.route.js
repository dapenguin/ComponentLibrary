var express = require('express');
var router = express.Router();
var productListData = require('../data/test/productList.js');

/* GET home page. */
router.get('/plp', function(req, res, next) {
	var data = {
		title: 'Product in the catalogue | My shop',
		bodyId: 'plp',
		bodyClass: 'plp',
		headerData: {
			siteName: 'My Shop'
		},
		products: productListData.products
	};

	res.render('pages/plp/plp', data);
});

module.exports = router;
