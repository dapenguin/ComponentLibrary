var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/somePage', function(req, res, next) {
	res.send('here is some page');
});

module.exports = router;
