var questions = [
  
  {
    question: 'How many states are in the United States?',
    answer: 50
  },
  {
    question: 'How many continents are there?',
    answer: 7
  },
  {
    question: 'How many legs does an insect have?',
    answer: 6
  }
];


var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i++) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }else{
    wrongAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
html = "You got " + wrongAnswers + " question(s) wrong."
print(html);

