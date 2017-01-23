var questions = [
  {	
	question: 'Where is Orphan Black filmed?',
	options: ['Toronto, Canada', 'New Orleans, LA', 'New York, New York', 'Athens, Greece'],
	choice: 0,
	correct: "Correctomundo! Orphan Black is filmed in Toronto, Canada. (Hi, Drake)"
  },
  { 
	question: 'What is the name of the cloning program?',
    options: ['Project Project', 'Project X', 'Project Leda', 'Project so Many of Us'],
    choice: 2,
	correct: "Great Scott, I've created life itself."
  },
  {	
	question: 'What does Rachel love?',
	options: ['Power', 'Her Mom and Dad', 'Sarah', 'Windows'],
	choice: 3,
	correct: "Oh wow, do you belong to The Clone Club?"
  },
    {	
	question: "What's the name of Sarah's step-brother?",
	options: ['Roger', 'Johnny', 'Felix', 'Mickey'],
	choice: 2,
	correct: "Holy shite, that worked!"
  },
  {
	question: 'What does Cosima love?',
	options: ['Her sisters', 'French Blonde Scientists', 'Pot', 'All of the Above'],
	choice: 3,
	correct: "Right on!"
  },
  {
	question: 'We make a family, yes?',
	options: ['Put a ring on it', "I've already got a family", 'Er, no?', 'Aah!'],
	choice: 1,
	correct: 'This, I like.'
	},
  {
  	question: "You know what's a very French thing to do?",
	options: ['Sing La Vie En Rose', 'Smoke a nice little cigarette', 'Watch Amelie', 'Monitor clones'],
	choice: 1,
	correct: 'Oui, brava!'
  	},
  {
  	question: "What's Sarah's term of endearment for her daughter Kira?",
	options: ['Lizard', 'Mini Clone', 'Loonie', 'Monkey'],
	choice: 3,
	correct: 'Nice job, eh?'
  	},
  {
  	question: "Sarah, Cal, and Kira are collectively referred to as?",
	options: ['The Fugitive Family', 'Hacker Fam', 'Oi! Fam', 'Lumberfamily'],
	choice: 3,
	correct: 'Nice job, meathead.'
  	},
  {
  	question: "Sarah, who is Beth Childs?",
	options: ["Who isn't Beth Childs, eh?", "Sarah's entry point into the clone conspiracy", "Paul's monitor", "Not a clone, that's for sure"],
	choice: 1,
	correct: "You're damn right."
  	}
];

var currentQuestion = 0;
var numberOfQuestions = questions.length;
var numberOfRightAnswers = 0;

// functions 

function displayQuestion(){
	$('.question').text(questions[currentQuestion].question);
	$('.choices').empty();

var totalChoices = questions[currentQuestion].options.length;

for (var i = 0; i < totalChoices.length; i++) {
	var buildOptionsHTML = '<input class="answer" type="radio" name="option" value="' + i + '">' + questions[currentQuestion].options[i] + '<br/>';
	$('.choices').append(buildOptionsHTML);
}

$('.count').text('Question ' + (currentQuestion + 1) + ' of ' + numberOfQuestions);
$('.score').text('You have ' + (numberOfRightAnswers) + ' of ' + numberOfQuestions + ' correct.');

}

$(document).ready(function(){
	$('.begin').show();
	$('.quiz').hide();
	$('.question').hide();
	$('.results').hide();

	// start quiz //
	$('.button_start').on('click', function(event){
		event.preventDefault();
	$('.begin').hide();
	$('.results').hide();
	$('.question').show();
	$('.quiz').show();
	$('.results').empty();
	displayQuestion();
	});

	// show questions
	$('.question').on('click', '.answer', function(){
		var userAnswer = $('input[class="answer"]:checked').val();

		var rightAnswer = questions[currentQuestion].choice;
		console.log('userAnswer = ', userAnswer);
		console.log('rightAnswer = ', rightAnswer);
		if(userAnswer === rightAnswer) {
			numberOfRightAnswers++;
			console.log(numberOfRightAnswers);
		}

		if((currentQuestion + 1) === numberOfQuestions) {
			$('.results').show();
			$('.quiz').hide();

			$('.results').text('You got' + (numberOfRightAnswers) + ' of ' + numberOfQuestions + ' correct.');
		}
		else {
			currentQuestion++;
			displayQuestion();
		}
	});

	$('.results').on('click', '.again', function(){
		$('.begin').show();
		$('.button_start').show();
		$('.quiz').hide();
		$('.results').hide();

		currentQuestion = 0;
		numberOfRightAnswers = 0;
	})

});




















































