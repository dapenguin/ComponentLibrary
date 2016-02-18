var express = require('express');
var router = express.Router();

/* Get main Component Library page. */
router.get('/cl', function(req, res, next) {
	var headerData = require('../components/header/header.data.js'),
		footerData = require('../components/footer/footer.data.js'),
		paginationBarData = require('../components/paginationBar/paginationBar.data.js');

	var data = {
		title: 'Component Library',
		layout: 'componentLibrary',
		components: [
			// tabsData,
			// regularShopTabsData,
			headerData,
			footerData,
			paginationBarData
		]
	};

	res.render('pages/componentLibrary/componentLibrary', data);
});

/* Get pages for displaying individual components */
router.get('/cl/:component', function(req, res, next) {
	var componentName = req.params.component,
		componentData = require('../components/' + componentName + '/' + componentName + '.data.js');

	var data = {
		title: 'Component Library - ' + componentData.name,
		layout: 'componentLibrary',
		component: componentData
	};

	res.render('pages/componentLibrary/componentSingle', data);
});

module.exports = router;
