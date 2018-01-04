var friends = require('../db/friends');

module.exports = function(app) {
	// From front to back === POST
	app.post('/api/survey', function(request, response) {
		var answers = request.body['answers']; // form answers from the front end

		var prev = Infinity;
		var diff = 0;
		var match = {};

		friends.forEach(function(friend) {
			// Reset the difference to zero before comparing answers
			diff = 0;
			// Loop through the answers current friend in loop and compare with the user's answers
			friend.answers.forEach(function(answer, index) {
				diff += Math.abs(parseInt(answers[index]) - answer);
			});
			
			// if the current score based on differences is higher than the last user or zero, set 
			// the best match to the current friend in array
			if ( diff <= prev ) {
				match = friend;
				prev = diff;
			} 	
		});

		response.send({match: match});
	});
}






// friends.forEach(function(val, index) {
// 	val.answers.forEach(function(answer) {
// 		console.log(index, val.name, answer);
// 	});
// });


// for ( var i = 0; i < 10; i++ ) {
// 	console.log(i);
// 	if ( i === 5 ) break;
// }