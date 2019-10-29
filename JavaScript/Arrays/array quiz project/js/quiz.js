
function printer(answers){
  for (var i = 0; i < answers.length; i++){
    document.write('<h1>' + (i + 1 + ') ') + answers[i] + '</h1>');
  }
}

//questions
var questions = [['How many states are in the U.S?', 50], ['How many legs to insects have?' , 6], ['How many contentinents are there?', 7]];
var answers = [];
var answersWrong = [];
var answersRight = [];


// 1. ask questions & store answers
//how many questions?
for (var i = 0; i < questions.length; i++){
  answers.push(prompt(questions[i][0]));
}

// 2.grade each answer for accuracy
for (var i = 0; i < answers.length; i++){
  if( parseInt(answers[i])  === questions[i][1]){
    answersRight.push(questions[i][0]);
  }else{
    answersWrong.push(questions[i][0]);
  }
}

//3.display the questions correct and questions they got wrong

document.write('<h3> Answers you got right:</h3>');
printer(answersRight);
document.write('<h3> Answers you got wrong:</h3>');
printer(answersWrong);


