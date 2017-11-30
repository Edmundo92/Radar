var express = require('express');
var app = express();

var routes = require('./routes');

/* importar o módulo do consign */
var consign = require('consign');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//chamar o ejs
app.set('view engine', 'ejs');

//home
app.get('/', routes.home);

//about
app.get('/about/:person?', routes.about);

//notfound
app.get('*', routes.notFound);



// consign({cwd: 'public'})
// 	.include('js/index.js') 
//     .into(app)
// ;


app.listen(3000, function(){
    console.log("A aplicação está a rodar em localhost:3000");
});