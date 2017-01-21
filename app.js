$(document).ready(function(){
	$('.quiz_name').show();
	$('.begin').show();
	$('.button_start').show();
	$('.question').hide();
	$('.answers').hide();
	$('.right_wrong').hide();
	$('.button_again').hide();
	$('.image_container').hide();
	$('.button_start').on('click', function(event){
		event.preventDefault();
	$('.question').show();
	$('.answers').show();
	$('.quiz_name').hide(); 
	$('.introduction').hide(); 
	$('.begin').hide(); 
	$('.right_wrong').hide(); 
	$('.button_again').hide(); 
	$('.image_container').show();
	$('.button_start').hide();
	});

	
	
	});


var questions = [
  {	
	question: 'Where is Orphan Black filmed?',
	options: ['Toronto, Canada', 'New Orleans, LA', 'New York, New York', 'Athens, Greece'],
	answer: 'Toronto, Canada',
	correct: "Correctomundo! Orphan Black is filmed in Toronto, Canada. (Hi, Drake)",
    wrong: 'Bzz! What would Helena think?'
  },
  { 
	question: 'What is the name of the cloning program?',
    options: ['Project Project', 'Project X', 'Project Leda', 'Project so Many of Us'],
    answer: 'Project Leda',
	correct: "Great Scott, I've created life itself.",
	wrong:	"It's okay, there's always tomorrow."
  },
  {	
	question: 'What does Rachel love?',
	options: ['Power', 'Her Mom and Dad', 'Sarah', 'Windows'],
	answer: 'Windows',
	correct: "Oh wow, do you belong to The Clone Club?",
	wrong: "I'm so bored."
  },
    {	
	question: "What's the name of Sarah's step-brother?",
	options: ['Roger', 'Johnny', 'Felix', 'Mickey'],
	answer: 'Felix',
	correct: "Holy shite, that worked!",
	wrong: "Woops."
  },
  {
	question: 'What does Cosima love?',
	options: ['Science', 'Her sisters', 'French Blonde Scientists', 'Pot', 'All of the Above'],
	answer: 'All of the Above.',
	correct: "Right on!",
	wrong: 'Err, at least you tried?'

  },
  {
	question: 'We make a family, yes?',
	options: ['Put a ring on it', "I've already got a family", 'Er, no?', 'Aah!'],
	answer: "I've already got a family.",
	correct: 'This, I like.',
	wrong: 'You make me cry, sestra.'
	},
  {
  	question: "You know what's a very French thing to do?",
	options: ['Sing La Vie En Rose', 'Smoke a nice little cigarette', 'Watch Amelie', 'Monitor clones'],
	answer: 'Smoke a nice little cigarette',
	correct: 'Oui, brava!',
	wrong: "No. I have to go. It-it's okay. Bye."
  	},
  {
  	question: "What's Sarah's term of endearment for her daughter Kira?",
	options: ['Lizard', 'Mini Clone', 'Loonie', 'Monkey'],
	answer: 'Loonie',
	correct: 'Nice job, eh?',
	wrong: "I'm the smallest kid in my class."
  	},
  {
  	question: "Sarah, Cal, and Kira are collectively referred to as?",
	options: ['The Fugitive Family', 'Hacker Fam', 'La Famila', 'Oi! Fam', 'Lumberfamily'],
	answer: 'Lumberfamily',
	correct: 'Nice job, meathead.',
	wrong: "Right, so you don't know, either?"
  	},
  {
  	question: "Sarah, who is Beth Childs?",
	options: ["Who isn't Beth Childs, eh?", "Sarah's entry point into the clone conspiracy", "Paul's monitor", "Not a clone, that's for sure"],
	answer: "Sarah's entry point into the clone conspiracy",
	correct: "You're damn right.",
	wrong: "Nope."
  	}
];




