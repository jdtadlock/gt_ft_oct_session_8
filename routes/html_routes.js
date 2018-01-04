var path = require('path');

module.exports = function(app) {
	// http://localhost:5000/
	// app.get('/', function(request, response) {

	// });

	app.get('/survey', function(request, response) {
		response.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}