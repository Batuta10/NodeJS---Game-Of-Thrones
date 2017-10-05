module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.indexControllers.index(application, req, res);
	});
}