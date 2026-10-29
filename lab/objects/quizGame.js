const questions = [
  {
    category: "category1",
    question: "question1?",
    choices: ["answer1", "answer2", "answer3"],
    answer: "answer1",
  },
  {
    category: "category3",
    question: "question2?",
    choices: ["answer1", "answer2", "answer3"],
    answer: "answer2",
  },
  {
    category: "category2",
    question: "question3?",
    choices: ["answer1", "answer2", "answer3"],
    answer: "answer3",
  },
  {
    category: "category2",
    question: "question4?",
    choices: ["answer1", "answer2", "answer3"],
    answer: "answer2",
  },
  {
    category: "category3",
    question: "question5?",
    choices: ["answer1", "answer2", "answer3"],
    answer: "answer1",
  }
];

function getRandomQuestion(arr) {
  const randomQuestion = Math.floor(Math.random() * arr.length);            
  return arr[randomQuestion];
}


function getRandomComputerChoice(arr) {           
  const randomAnswer = Math.floor(Math.random() * arr.length)                  
  return arr[randomAnswer];
}

function getResults(question, choice) {
  if (question.answer === choice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;     
  }
}


const question = getRandomQuestion(questions);
const questionIndex = questions.indexOf(question); 
const choice = getRandomComputerChoice(questions[questionIndex].choices) 
     
console.log(getResults(question, choice));  