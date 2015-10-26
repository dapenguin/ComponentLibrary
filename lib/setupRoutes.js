// Route includes
var componentLibrary = require('../routes/componentLibrary');

module.exports = function(app){
	// Route setup
	app.use('/cl', componentLibrary);
};
