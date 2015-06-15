module.exports = function(hbs){
	hbs.registerHelper('codeBlock',function(code,options){
		var beautify = require('js-beautify');
		var content = options.fn(code);

		content = beautify.html(content);

		var codeContent = '<pre>' + hbs.Utils.escapeExpression(content) + '</pre>'
		return codeContent;
	});

	hbs.registerHelper('dynamicPartial',function(partialName, context){
		var partials = hbs.handlebars.partials;
		
		var partial = partials[partialName];

		var renderPartial = hbs.compile(partial);

		return renderPartial(context);
	});
};