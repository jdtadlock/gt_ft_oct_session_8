var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// process.env.PORT = 3000;
var port = process.env.PORT || 8080;

var app = express();

// static is your front end files --- Browser
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/html_routes')(app);
require('./routes/api_routes')(app);

app.listen(port, function() {
	console.log('Listening......');
});








// var some_var = '' || 0 || true;
// console.log(some_var); // true


// var obj = {
// 	title: 'Some title'
// 	someObj: {
// 		another_prop: 'Some prop'
// 	}
// }

// console.log(obj.title);



















// function test(str) {
// 	console.log(str);
// }

// test('some string');

// var htmlRoutes = require('./routes/html_routes');



// function htmlRoutes(app) {
	
// }