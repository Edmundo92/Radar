//home
exports.home = function(req, res){
    res.render('home', {
        title: "Radar"
    });
    //res.send("<h2>Radar</h2>")
};

//about
exports.about = function(req, res){
    var person = req.params.person;
    res.send("Este é o Aluno" + person);
};

//notfound
exports.notFound = function(req, res){
    res.send("Erro Página não encontrada");
};