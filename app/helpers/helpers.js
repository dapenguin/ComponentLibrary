module.exports = function(hbs){
	hbs.registerHelper('codeBlock',function(code,options){
		var beautify = require('js-beautify');
		var content = options.fn(code);

		content = beautify.html(content);

		//var codeContent = '<pre>' + hbs.Utils.escapeExpression(content) + '</pre>';
		var codeContent = hbs.Utils.escapeExpression(content);
		return codeContent;
	});

	hbs.registerHelper('dynamicPartial',function(partialName, context){
		var partials = hbs.handlebars.partials;

		var partial = partials[partialName];

		var renderPartial = hbs.compile(partial(context));

		return renderPartial();
	});

	hbs.registerHelper('lineGraph',function(array, width, height){
		var chartable = require('chartable');

		var html = chartable.lineGraph(array, { width: width, height: height });

		return new hbs.SafeString(html);
	});

	// Tests whether two values are the same.
	hbs.registerHelper('eq',function(firstValue, secondValue, options){
		if (firstValue == secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	// Tests whether two values are not the same.
	hbs.registerHelper('ne',function(firstValue, secondValue, options){
		if (firstValue != secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	// Tests whether the first value is greater than the second.
	hbs.registerHelper('gt',function(firstValue, secondValue, options){
		if (firstValue > secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	// Tests whether the first value is greater than or equal to the second.
	hbs.registerHelper('gte',function(firstValue, secondValue, options){
		if (firstValue >= secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	// Tests whether the first value is less than the second.
	hbs.registerHelper('lt',function(firstValue, secondValue, options){
		if (firstValue < secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	// Tests whether the first value is less than or equal to the second.
	hbs.registerHelper('lte',function(firstValue, secondValue, options){
		if (firstValue <= secondValue){
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});
};
