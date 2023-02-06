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
    question: "What is 1+1",
    option: [
      "The answer is 1",
      "The answer is 2",
      "The answer is 3",
      "The answer is 4",
    ],
  },
  {
    question: "What is 2+2",
    option: [
      "The answer is 6",
      "The answer is 4",
      "The answer is 8",
      "The answer is 12",
    ],
  },
  {
    question: "What is 1+1",
    option: [
      "The answer is 1",
      "The answer is 2",
      "The answer is 3",
      "The answer is 4",
    ],
  },
];
let answersList = [
  {
    correct: questionsList[0].option[1],
  },
  {
    correct: questionsList[1].option[1],
  },
  {
    correct: questionsList[2].option[1],
  },
];
question.innerText = questionsList[0].question;
option1.innerText = questionsList[0].option[0];
option2.innerText = questionsList[0].option[1];
option3.innerText = questionsList[0].option[2];
option4.innerText = questionsList[0].option[3];
score.innerText = "10";

function test() {
  choose = document.getElementById("quiz-answer-1").innerText;
  ch = document.getElementById("quiz-answer-1");
  console.log(answersList[0].correct);
  if (toString(choose) == toString(answersList[0].correct)) {
    console.log("works");
    ch.style.backgroundColor = "green";
  } else {
    console.log("fail");
    ch.style.backgroundColor = "red";
  }
}
