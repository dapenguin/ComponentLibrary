var hbs = require('hbs');

hbs.registerHelper('codeBlock',function(code,options){
  var content = options.fn(code);
  var codeContent = '<pre>' + hbs.Utils.escapeExpression(content) + '</pre>'
  return codeContent;
});
