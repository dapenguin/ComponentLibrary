var fs = require('fs');
var path = require('path');

/**
 * Takes a folder a creates routes from the files contained.
 * @param  {Object} app          The middleware application. For now, this is
 *                               Express.
 * @param  {String} routesFolder The path to the folder containing the
 *                               JavaScript files for the various routes. 
 */
var setupRoutes = function(app, routesFolder){
	// Get a list of the files in the Routes folder
	var filenames = fs.readdirSync(routesFolder);

	var i = 0;
	var il = filenames.length;

	var routeInclude;

	// Loop through the files found
	for (;i<il;i++){
		// Make sure it's a JavaScript file
		if (path.extname(filenames[i]) === '.js'){
			// Load the file as a Node module and mount it from the root
			app.use('/', require(path.join(routesFolder,filenames[i])));
		}
	}
};

module.exports = setupRoutes;
