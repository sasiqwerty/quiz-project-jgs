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

// the questions list is an array containing questions as objects
// the option is a list of answers
// correct is the right option, when selected you will be awarded a point
let questionsList = [
  {
    question: "insert the first question here",
    option: [
      "option1 from list",
      "option2 from list",
      "option3 from list",
      "option4 from list",
    ],
    correct: "option[0]",
  },
];
question.innerText = questionsList[0].question;
option1.innerText = questionsList[0].option[0];
option2.innerText = questionsList[0].option[1];
option3.innerText = questionsList[0].option[2];
option4.innerText = questionsList[0].option[3];
score.innerText = "10";
