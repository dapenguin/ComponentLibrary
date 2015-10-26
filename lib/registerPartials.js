// Helps with this problem:
// http://stackoverflow.com/questions/8059914/express-js-hbs-module-register-partials-from-hbs-file

module.exports = function(handlebars,dir){
	var fs = require('fs');

	var filenames = fs.readdirSync(dir);

	filenames.forEach(function (filename) {
		var matches = /^([^.]+).hbs$/.exec(filename);
		if (!matches) {
			return;
		}
		var name = matches[1];
		var fullPathToPartial = dir + '/' + filename;
		var template = fs.readFileSync(fullPathToPartial, 'utf8');
		handlebars.registerPartial(name, template, filename);
	});
}
