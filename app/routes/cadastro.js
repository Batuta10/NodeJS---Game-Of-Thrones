module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastroControllers.cadastro(application, req, res);
	});
}