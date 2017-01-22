var questions = [
  {	
	question: 'Where is Orphan Black filmed?',
	options: ['Toronto, Canada', 'New Orleans, LA', 'New York, New York', 'Athens, Greece'],
	choice: 0,
	correct: "Correctomundo! Orphan Black is filmed in Toronto, Canada. (Hi, Drake)",
  },
  { 
	question: 'What is the name of the cloning program?',
    options: ['Project Project', 'Project X', 'Project Leda', 'Project so Many of Us'],
    choice: 2,
	correct: "Great Scott, I've created life itself.",
  },
  {	
	question: 'What does Rachel love?',
	options: ['Power', 'Her Mom and Dad', 'Sarah', 'Windows'],
	choice: 3,
	correct: "Oh wow, do you belong to The Clone Club?",
  },
    {	
	question: "What's the name of Sarah's step-brother?",
	options: ['Roger', 'Johnny', 'Felix', 'Mickey'],
	choice: 2,
	correct: "Holy shite, that worked!",
  },
  {
	question: 'What does Cosima love?',
	options: ['Her sisters', 'French Blonde Scientists', 'Pot', 'All of the Above'],
	choice: 3,
	correct: "Right on!",
  },
  {
	question: 'We make a family, yes?',
	options: ['Put a ring on it', "I've already got a family", 'Er, no?', 'Aah!'],
	choice: 1,
	correct: 'This, I like.',
	},
  {
  	question: "You know what's a very French thing to do?",
	options: ['Sing La Vie En Rose', 'Smoke a nice little cigarette', 'Watch Amelie', 'Monitor clones'],
	choice: 1,
	correct: 'Oui, brava!',
  	},
  {
  	question: "What's Sarah's term of endearment for her daughter Kira?",
	options: ['Lizard', 'Mini Clone', 'Loonie', 'Monkey'],
	choice: 3,
	correct: 'Nice job, eh?',
  	},
  {
  	question: "Sarah, Cal, and Kira are collectively referred to as?",
	options: ['The Fugitive Family', 'Hacker Fam', 'Oi! Fam', 'Lumberfamily'],
	choice: 3,
	correct: 'Nice job, meathead.',
  	},
  {
  	question: "Sarah, who is Beth Childs?",
	options: ["Who isn't Beth Childs, eh?", "Sarah's entry point into the clone conspiracy", "Paul's monitor", "Not a clone, that's for sure"],
	choice: 1,
	correct: "You're damn right.",
  	}
];

var currentQuestion = 0;
var totalQuestions = questions.length;
var totalCorrectAnswers = 0;

function startGame(){
	$('.question').text(questions[currentQuestion].question);
	$('.answers').empty();

	var numberOfChoices = questions[currentQuestion].options.length;

	for(var i = 0; i < numberOfChoices; i++){
		var buildChoiceHTML = '<input class='answer' type='radio' name='option' value="' + i + '">' +
		questions[currentQuestion].options[i] + "<br/>";
		$('.answers').append(buildChoiceHTML);
	}

	$('.count').text('Question ' + (currentQuestion + 1) + 'of' + totalQuestions);
	$('.score').text('You have' + (totalCorrectAnswers) + 'of' + totalQuestions + 'correct.');
}

$(document).ready(function(){
	$('.quiz_name').show();
	$('.begin').show();
	$('.button_start').show();
	$('.question').hide();
	$('.answers').hide();
	$('.count').hide();
	$('.score').hide();
	$('.button_again').hide();
	$('.image_container').hide();

	// start quiz //
	$('.button_start').on('click', function(event){
		event.preventDefault();
	$('.question').show();
	$('.answers').show();
	$('.quiz_name').hide(); 
	$('.introduction').hide(); 
	$('.begin').hide(); 
	$('.count').hide();
	$('.score').hide(); 
	$('.button_again').hide(); 
	$('.image_container').show();
	$('.button_start').hide();
	});
});




















































