module.exports = function(hbs){
	hbs.registerHelper('codeBlock',function(code,options){
		var content = options.fn(code);

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