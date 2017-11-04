// Global Variables
var correct = 0
var incorrect = 0
var unanswered = 0
var correctAnswers = ['A) Will','A) Hawkins','A) US Dept of Agriculture','C) Russin Intellegince', 'B) Eggo Waffles', 'B) Christmas Lights', 'A) A Deer', 'A) A Baseball Bat']
var number = 80
var time
// functions




//Hides questions and timer
$(document).ready(function() {
	$('#section').hide();
	$('#timer').hide();
});

//Runs timer
function run() {
	time = setInterval(decrement, 1000)
	console.log(time)
}

//Decrease timer
function decrement() {
	number--;
	$('#timer').html('<h1>' + 'Timer: ' + number + '</h1>');
// Stops timer and displays score
	if (number === 0) {
		$('#section').html('<h1>'+'Correct: ' + correct + '</h1><br>' + 
			'<h1>'+'Incorrect: ' + incorrect + '</h1><br>' +
			'<h1>'+'Unanswered: ' + unanswered + '</h1><br>')
		$('#timer').hide();

	}

}

run();

// Hides and shows HTML elements
document.onkeyup = function(event){

	$('#img').attr('src', './assets/images/strangerGame.jpg')
	$('.content').hide();
	$('#section').show();
	$('#timer').show();
}


$('#correct').on('click', function() {
	if (correctAnswers);
	correct++;
	console.log(correctAnswers)
})

