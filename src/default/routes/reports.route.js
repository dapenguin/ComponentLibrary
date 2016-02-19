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
		cssFilesToReport = fs.readdirSync(cssPath),
		i = 0,
		il = cssFilesToReport.length,
		cssContent,
		cssFileStats,
		specificityStats;

	for (;i<il;i++){
		if (path.extname(cssFilesToReport[i]) === '.css'){
			cssContent = fs.readFileSync(path.join(cssPath,cssFilesToReport[i]),{encoding: 'utf8'});
			cssFileStats = cssstats(cssContent,{
				specificityGraph: true
			});
			specificityStats = cssFileStats.selectors.specificity;

			// fs.writeFileSync(
			// 	path.join(__dirname,'../../../build/',path.basename(cssFilesToReport[i],'.css')+'.json'),
			// 	JSON.stringify(cssFileStats)
			// );

			data.cssData[i] = {
				cssFileName: cssFilesToReport[i],
				size: cssFileStats.size,
				gzipSize: cssFileStats.gzipSize,
				specificityData: specificityStats.graph,
				specificityMax: specificityStats.max,
				specificityAvg: specificityStats.average
			};
		}
	}

	res.render('pages/componentLibrary/cssStats', data);
});

module.exports = router;
