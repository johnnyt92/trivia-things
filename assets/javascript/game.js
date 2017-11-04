$(document).ready(function() {
	$('#timer').hide();
});

$('.content').on('click',function(){
	game.start()
})

var questions = [{
	questions:'In their D and D adventures, which one of the 4 friends is the wizard',
	answers:['A) Will', 'B) Dustin','C) Eleven','D) Lucas'],
	correctAnswer:'A) Will'
},
{
	questions:' What is the name of the city that the story takes place in?',
	answers:['A) Hawkins ', 'B) Springfield','C) Winterfell','D) Salt Lake City'],
	correctAnswer: 'A) Hawkins'
},
{
	questions:' What department of the government is the lab running under?',
	answers:['A) US Dept of Agriculture', 'B) Federal Drug Administration','C) US Dept of Energy','D) US Dept of Forestry'],
	correctAnswer: 'A) US Dept of Agriculture'
},
{
	questions:' What was Dr. Brenner looking for when experimenting on 11',
	answers:['A) Telekinesis', 'B) His Daughter','C) Russin Intellegince','D) Will'],
	correctAnswer: 'A) Russin Intellegince'
},
{
	questions:' What is 11’s favorite food',
	answers:['A) Hot Cheetos and Takis', 'B) Eggo Waffles','C) Hot Dogs','D) Salami'],
	correctAnswer: 'A) Eggo Waffles'
},

{
	questions:' How does will communicate with joyce while in the upside down?',
	answers:['A) Walkie Talkie', 'B) Christmas Lights','C) Texting','D) Playstation'],
	correctAnswer: 'A) Christmas Lights'
},

{
	questions:' What is the domogorgon eating when nancy spots it in the Upside Down?',
	answers:['A) A Deer', 'B) Barb','C) Eleven','D) A Dog'],
	correctAnswer: 'A) A Deer'
},

{
	questions:' What is the domogorgon eating when nancy spots it in the Upside Down?',
	answers:['A) A Baseball Bat', 'B) Glock 19','C) Shotgun','D) AWP'],
	correctAnswer: 'A) A Baseball Bat'
}];


var game = {
	correct : 0,
	incorrect :0,
	unanswered :0,
	number :50,

	countdown: function(){
		game.number--;
		$('#timer').html('<h1>' + 'Timer: ' + game.number + '</h1>');
		if (game.number <= 0) {
			console.log("time is up!");
			game.done();
		}
	},

	start: function(){

		$('#img').attr('src', './assets/images/strangerGame.jpg')
		$('.content').hide();
		$('#section').show();
		$('#timer').show();
		timer = setInterval(game.countdown, 1000)

		for (var i = 0; i < questions.length; i++) {
			$('#section').append('<h3>' + questions[i].questions+ '</h3><br>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				$('#section').append("<input type='radio' name='question-"+i+"' value='"+ questions[i].answers[j]+"'>"+questions[i].answers[j])
			}
		}
	},

	done: function() {
		$.each($('input[name="questions-0]":checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-1]":checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-2]":checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-3]":checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-4]":checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-5]":checked'),function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-6]":checked'),function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-7]":checked'),function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="questions-8]":checked'),function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		this.result();
	},

	result: function(){
		clearinterval(timer);
		$('#timer').hide();
		$('#section').html('<h1>'+'Correct: ' + this.correct + '</h1><br>' + 
			'<h1>'+'Incorrect: ' + this.incorrect + '</h1><br>' +
			'<h1>'+'Unanswered: ' +(questions.length(this.incorrect+this.correct))+ '</h1><br>')
	}
}




//Hides questions and timer
$(document).ready(function() {
	$('#timer').hide();
});
