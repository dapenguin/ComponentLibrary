var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/reports', function(req, res, next) {
	var data = {
		title: 'Specificity Report',
		layout: 'reports',
		javaScriptFiles: [
			{src:'specificity-graph-standalone.js'}
		],
		cssFiles: [
			{src:'specificity.css'}
		],
		cssData: []
	};

	console.log(req.session);

	var cssPath = path.join(__dirname,'../../../app/public/css'),
		cssFilesToReport = [].concat(req.query.css),
		i = 0,
		il = cssFilesToReport.length,
		cssContent;

	for (;i<il;i++){
		cssContent = fs.readFileSync(path.join(cssPath,cssFilesToReport[i]),{encoding: 'utf8'});
		data.cssData.push(JSON.stringify(cssContent));
	}

	data.cssFilesToReport = cssFilesToReport;

	res.render('pages/componentLibrary/specificity', data);
});

module.exports = router;
