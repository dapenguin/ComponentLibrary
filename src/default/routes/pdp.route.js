var express = require('express');
var router = express.Router();
var pageDefaultData = require('../data/pageDefaults.data.js');
var productListData = require('../data/test/productList.js');

var getProductIndex = function(productId){
	var products = productListData.products,
		i = 0,
		il = products.length;

	for (;i<il;i++){
		if (products[i].id === productId){
			return i;
		}
	}

	return false;
};

/* GET home page. */
router.get('/pdp', function(req, res, next) {
	var data = Object.create(pageDefaultData);

	data.title = 'Product in the catalogue | My shop';
	data.bodyId = 'plp';
	data.bodyClass = 'plp';

	var products = productListData.products;

	var productIndex = getProductIndex(req.query.productId);

	if (productIndex !== false) {
		data.productName = products[productIndex].name;
		data.productDesc = products[productIndex].desc;
		data.productPrice = products[productIndex].price;
		data.productPromotions = products[productIndex].promotions;

		res.render('pages/pdp/pdp', data);
	} else {
		res.send('Product not found');
	}
});

module.exports = router;
