// Helps with this problem:
// http://stackoverflow.com/questions/8059914/express-js-hbs-module-register-partials-from-hbs-file

var registerPartialsInFolder = function(handlebars,dir){
	var fs = require('fs');
	var path = require('path');

	var filenames = fs.readdirSync(dir);

	filenames.forEach(function(filename){
		var filePath = path.join(dir, filename),
			stats = fs.statSync(filePath);

		if (stats.isDirectory()){
			registerPartialsInFolder(handlebars, filePath);
		} else {
			var matches = /^([^.]+).hbs$/.exec(filename);
			if (!matches) {
				return;
			}

			var name = matches[1];
			var template = fs.readFileSync(filePath, 'utf8');
			handlebars.registerPartial(name, template, filename);
		}
	});
};

module.exports = registerPartialsInFolder;
