// Create our namespace
var CL = CL || {};

CL.codeRevealer = function(){
	var _config = {
		codeLinkClass: 'clShowCode',
		hideClass: 'clCodeHidden'
	};

	var _showCodeClickHandlers = [];

	var _showCodeClick = function(event){
		var elementClicked = this,
			codeBlockId = elementClicked.hash.replace('#',''),
			codeBlockElem = document.getElementById(codeBlockId);

		event.preventDefault();

		if (codeBlockElem){
			if (CL.hasClass(codeBlockElem,_config.hideClass)){
				CL.removeClass(codeBlockElem,_config.hideClass);
			} else {
				CL.addClass(codeBlockElem,_config.hideClass);
			}
		}
	};

	var _bindEvents = function(){
		var showCodeLinks = document.getElementsByClassName(_config.codeLinkClass),
			i = 0,
			il = showCodeLinks.length;

		for (;i<il;i++){
			_showCodeClickHandlers.push(showCodeLinks[i].addEventListener('click',_showCodeClick));
		}
	};

	var _init = function(){
		_bindEvents();
	};

	_init();
};

CL.hasClass = function(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};

CL.addClass = function(ele,cls) {
	if (!CL.hasClass(ele,cls)) ele.className += " "+cls;
};

CL.removeClass = function(ele,cls) {
	if (CL.hasClass(ele,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
};

// Add JS class to HTML tag as it's faster than putting it on the BODY tag when the DOM is ready.
// Using a self executing function to avoid poluting the global namespace.
(function(){
	var htmlElement = document.documentElement;
	// Get rid of the noJs class
	htmlElement.className = htmlElement.className.replace(/\bclNoJs\b/,'');
	// Add a js class
	htmlElement.className += ' clJs';
})();

document.addEventListener('DOMContentLoaded',function(){
	CL.codeRevealer();
});
