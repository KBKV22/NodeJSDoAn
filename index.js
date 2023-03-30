var express = require('express')
var ejs = require('ejs')

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(3000)

//localhost:3000
app.get('/', function(req, res){

    res.render('pages/index');  


});