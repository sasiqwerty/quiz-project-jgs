// variable declaration for the question
let question = document.getElementById("quiz-question-1");
// variable declarations for answers
let option1 = document.getElementById("quiz-answer-1");
let option2 = document.getElementById("quiz-answer-2");
let option3 = document.getElementById("quiz-answer-3");
let option4 = document.getElementById("quiz-answer-4");
// variable declaration for the score output
let score = document.getElementById("score-output");

//output
question.innerText = "question";
option1.innerText = "answer1";
option2.innerText = "answer2";
option3.innerText = "answer3";
option4.innerText = "answer4";
score.innerText = "10";

// Find a way to link a json file and let it iterate over the questions and answers
