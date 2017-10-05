module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {validacao: {}, dadosForm: {}} );
}

module.exports.cadastrar = function (application, req, res) {
    var dadosForm = req.body;
    
        req.assert('nome', 'Nome é obrigatorio não pode passar de 45 ou ser menor que 3 letras').notEmpty();
        req.assert('usuario', 'Usuario é obrigatorio não pode passar de 45 ou ser menor que 3 letras').notEmpty();
        req.assert('senha', 'Senha é obrigatorio não pode passar de 45 ou ser menor que 8 letras').notEmpty();
        req.assert('casas', 'Casa não pode estar vazio').notEmpty();
    
        var erros = req.validationErrors();
    
        if (erros) {
            res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
            return;
        }
        res.send('podemos cadastrar');
}