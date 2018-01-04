function compareFriends(event) {
	event.preventDefault();

	var name = $('#name').val().trim();
	var question1 = $('input[name="question-1"]:checked').val();
	var question2 = $('input[name="question-2"]:checked').val();
	var question3 = $('input[name="question-3"]:checked').val();
	// var one = 'one', two = 'two', three = 'three';
	
	// var some_val = 'Some value to use';

	// $('body').append(`
	// 	<h1>${some_val}</h1>
	// 	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad, error alias similique, sequi, nam tenetur magni quo minima vitae, autem adipisci amet. Accusamus ratione repellat cupiditate, labore enim atque.</p>
	// 	<button>Click Me</button>
	// `);
	

	$.post('/api/survey', {
		name: name,
		answers: [question1, question2, question3]
	}).then(function(res) {
		// String Interpolation
		// alert(`Your best match is ${res.match.name} and ${one} also ${two} and one more ${three}`);
		alert(`Your best match is ${res.match.name}`);
	});
}

$('#submit').on('click', compareFriends);

