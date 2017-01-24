var questions = [
  {	
	question: 'Where is Orphan Black filmed?',
	options: ['Toronto, Canada', 'New Orleans, LA', 'New York, New York', 'Athens, Greece'],
	choice: 0,
	correctMessage: "Correctomundo! Orphan Black is filmed in Toronto, Canada. (Hi, Drake)"
  },
  { 
	question: 'What is the name of the cloning program?',
    options: ['Project Project', 'Project X', 'Project Leda', 'Project so Many of Us'],
    choice: 2,
	correctMessage: "Great Scott, I've created life itself."
  },
  {	
	question: 'What does Rachel love?',
	options: ['Power', 'Her Mom and Dad', 'Sarah', 'Windows'],
	choice: 3,
	correctMessage: "Oh wow, do you belong to The Clone Club?"
  },
    {	
	question: "What's the name of Sarah's step-brother?",
	options: ['Cora', 'Johnny', 'Felix', 'Mickey'],
	choice: 2,
	correctMessage: "Holy shite, that worked!"
  },
  {
	question: 'What does Cosima love?',
	options: ['Her sisters', 'French Blonde Scientists', 'Pot', 'All of the Above'],
	choice: 3,
	correctMessage: "Right on!"
  },
  {
	question: 'We make a family, yes?',
	options: ['Put a ring on it', "I've already got a family", 'Er, no?', 'Aah!'],
	choice: 1,
	correctMessage: 'This, I like.'
	},
  {
  	question: "You know what's a very French thing to do?",
	options: ['Sing La Vie En Rose', 'Smoke a nice little cigarette', 'Watch Amelie', 'Monitor clones'],
	choice: 1,
	correctMessage: 'Oui, brava!'
  	},
  {
  	question: "What's Sarah's term of endearment for her daughter Kira?",
	options: ['Lizard', 'Mini Clone', 'Loonie', 'Monkey'],
	choice: 3,
	correctMessage: 'Nice job, eh?'
  	},
  {
  	question: "Sarah, Cal, and Kira are collectively referred to as?",
	options: ['The Fugitive Family', 'Hacker Fam', 'Oi! Fam', 'Lumberfamily'],
	choice: 3,
	correctMessage: 'Nice job, meathead.'
  	},
  {
  	question: "Sarah, who is Beth Childs?",
	options: ["Who isn't Beth Childs, eh?", "Sarah's entry point into the clone conspiracy", "Paul's monitor", "Not a clone, that's for sure"],
	choice: 1,
	correctMessage: "You're damn right."
  	}
];

var currentQuestion = 0;
var numberOfQuestions = questions.length;
var numberOfRightAnswers = 0;

// functions 

function displayQuestion(){
	//console.log('hello');
	// update question text //
	$('.question').text(questions[currentQuestion].question);
	// delete pre-existing choices //
	$('.choices').empty();

	// total number of choices for current question //
var totalChoices = questions[currentQuestion].options.length;
	
	// loop thru all choices and append them to .choices div //
for (var i = 0; i < totalChoices; i++) {
	// loop choices and append them to .choices div //
	var buildOptionsHTML = '<input class="answer" type="radio"  name="option" value="' + i + '">' + questions[currentQuestion].options[i] + ' <br/> ';
	// append the row to choices container in HTML //
	$('.choices').append(buildOptionsHTML);
}
	
	// number of the current question //
$('.count').text('Question ' + (currentQuestion + 1) + ' of ' + numberOfQuestions);
$('.score').text('You have ' + (numberOfRightAnswers) + ' of ' + numberOfQuestions + ' correct.');

}
	// begin jQuery //

$(document).ready(function(){
	$('.begin').show();
	$('.quiz').hide();
	$('.results').hide();

	// start quiz //
	$('.button_start').on('click', function(){
	$('.results').hide();
	$('.begin').hide();
	$('.quiz').show();
	$('.results').empty();
	displayQuestion();
});

	// show questions
	$('.quiz').on('click', '.answer', function(){

			// user input //
		var userAnswer = $('input[class="answer"]:checked').val();

			// get correct answer from questions array //
		var rightAnswer = questions[currentQuestion].choice;
		console.log('userAnswer = ', userAnswer);
		console.log('rightAnswer = ', rightAnswer);
		if (userAnswer === rightAnswer) {
			numberOfRightAnswers++;
			console.log('total right answers = ', numberOfRightAnswers);
		}

		// if quiz is finished, show results // 
		if ((currentQuestion + 1) === numberOfQuestions) {
			$('.results').show();
			$('.begin').hide();
			$('.quiz').hide();

			$('.results').text((numberOfRightAnswers) + ' out of ' + numberOfQuestions + '. Welcome to the trip, man.');
			
		}
		else {
			currentQuestion++;
			displayQuestion();
		}
	});
		// load restart section //
	$('.results').on('click', '.again', function(){
		$('.begin').show();
		$('.quiz').hide();
		$('.results').hide();

		currentQuestion = 0;
		numberOfRightAnswers = 0;
	});
});



















































