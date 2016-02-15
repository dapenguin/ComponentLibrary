var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var cssstats = require('cssstats');

router.get('/reports', function(req, res, next) {
	var data = {
		title: 'CSS Statistics',
		layout: 'reports',
		cssFiles: [
			{src:'style.css'},
			{src:'componentLibrary.css'}
		],
		cssData: []
	};

	var cssPath = path.join(__dirname,'../../../app/public/css'),
		cssFilesToReport = [].concat(req.query.css),
		i = 0,
		il = cssFilesToReport.length,
		cssContent,
		cssFileStats;

	for (;i<il;i++){
		cssContent = fs.readFileSync(path.join(cssPath,cssFilesToReport[i]),{encoding: 'utf8'});
		cssFileStats = cssstats(cssContent,{
			specificityGraph: true
		});

		data.cssData[i] = {
			cssFileName: cssFilesToReport[i],
			size: cssFileStats.size,
			gzipSize: cssFileStats.gzipSize,
			specificityData: cssFileStats.selectors.specificity.graph
		};
	}

	res.render('pages/componentLibrary/cssStats', data);
});

module.exports = router;
