var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
	var data = {
		title: 'Welcome to my shop!',
		bodyId: 'homepage',
		bodyClass: 'homepage',
		headerData: {
			siteName: 'My Shop'
		}
	};

	res.render('pages/home/home', data);
});

module.exports = router;
