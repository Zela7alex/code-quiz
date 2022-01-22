var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

let questions = [{
    question: "Inside which HTML element do we put the Javascript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
},
{
    question: "Which is not a JavaScript Data Type?",
    choice1: "Container",
    choice2: "String",
    choice3: "Boolean",
    choice4: "Object",
    answer: 1,
},
{
    question: "Is it possible to break JavaScript Code into several lines?",
    choice1: "true",
    choice2: "false",
    answer: 1,
},
{
    question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    choice1: "document.location='http://www.newlocation.com';",
    choice2: "browser.location='http://www.newlocation.com';",
    choice3: "navigator.location='http://www.newlocation.com';",
    choice4: "window.location='http://www.newlocation.com';",
    answer: 4,
},
{
    question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    choice1: "getIndex()",
    choice2: "location()",
    choice3: "indexOf()",
    choice4: "None of the above.",
    answer: 3,
},
{
    question: "How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,

},
{
    question: "Which of the following function of String object returns the character at the specified index?",
    choice1: "charAt()",
    choice2: "charCodeAt()",
    choice3: "concact()",
    choice4: "indexOf()",
    answer: 1,
}
];

const CORRECT_POINTS = 10;
const MAX_QUESTIONS = 7;

//Created startQuiz function by passing in getNewQuestion
function startQuiz() {

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};
startQuiz()

// This function will randomly get a new question with its choices
function getNewQuestion() {

    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
};
