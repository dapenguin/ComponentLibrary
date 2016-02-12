var uncss = require('uncss');

uncss(['http://localhost:3000/componentTest'],{timeout:1000,report:true},function(error, output){
	console.log(error,output);
});
