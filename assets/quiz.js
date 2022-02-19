var quizCont = document.getElementById("quiz-container");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice-1");
var choice2 = document.getElementById("choice-2");
var choice3 = document.getElementById("choice-3");
var choice4 = document.getElementById("choice-4");
var timer = document.getElementById("timer");
var nextBtn = document.getElementById("next");
var clock = document.getElementById("time");

//------------------------------------
//Questions array 
var questions = [{
    question: "Inside which HTML element do we put the Javascript?",
    theChoices: {
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>"
    },
    rightChoice: 'choice1'
},
{
    question: "Which is not a JavaScript Data Type?",
    theChoices: {
        choice1: "Container",
        choice2: "String",
        choice3: "Boolean",
        choice4: "Object",
    },
    rightChoice: 'choice1'
},
{
    question: "Is it possible to break JavaScript Code into several lines?",
    theChoices: {
        choice1: "true",
        choice2: "false",
        choice3: "sometimes",
        choice4: "only using Jquery"
    },
    rightChoice: 'choice1'
},

{
    question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    theChoices: {
        choice1: "document.location='http://www.newlocation.com';",
        choice2: "browser.location='http://www.newlocation.com';",
        choice3: "navigator.location='http://www.newlocation.com';",
        choice4: "window.location='http://www.newlocation.com';",
    },
    rightChoice: 'choice4'
},
{
    question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    theChoices: {
        choice1: "getIndex()",
        choice2: "location()",
        choice3: "indexOf()",
        choice4: "None of the above.",
    },
    rightChoice: 'choice3'
},
{
    question: "How do you write 'Hello World' in an alert box?",
    theChoices: {
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
    },
    rightChoice: 'choice4'
},
{
    question: "Which of the following function of String object returns the character at the specified index?",
    theChoices: {
        choice1: "charAt()",
        choice2: "charCodeAt()",
        choice3: "concact()",
        choice4: "indexOf()",
    },
    rightChoice: 'choice1'
}
];
//--------------------------------------------------

var currentQuestion = 0;
var score = 0;
var time = 60000;

// *** FUNCTION - Time of countdown clock
function keepTime() {
    if (time >= 0) {
        time = time - 1000;
        var clockTime = time / 1000;
        clock.innerText = clockTime;
    } else {
        endGame();
        clearInterval();

    }
}
// *** FUNCTION - Keeps the time for th 
function runGame() {
    setInterval(keepTime, 1000);
    nextQuestion();
}

// *** FUNCTION - Ends game and redirects to highscores
function endGame() {
    window.location.href = 'highScores.html';

}

function nextQuestion() {
    if (currentQuestion <= 7) {
        renderQuestion(currentQuestion);

    } else {
        endGame();
    }
}

// *** FUNCTION - shows questions & choices on page
function renderQuestion(num) {
    var questionShown = questions[num];
    question.innerHTML = "<p>" + questionShown.question + "</p>";
    choice1.innerText = questionShown.theChoices.choice1;
    choice2.innerText = questionShown.theChoices.choice2;
    choice3.innerText = questionShown.theChoices.choice3;
    choice4.innerText = questionShown.theChoices.choice4;
}

// Will go to next array item when "Next btn" clicked
nextBtn.addEventListener("click", () => {
    currentQuestion++
    choice1.classList.remove('correct-choice')
    choice2.classList.remove('correct-choice')
    choice3.classList.remove('correct-choice')
    choice4.classList.remove('correct-choice')
    choice1.classList.remove('incorrect-choice')
    choice2.classList.remove('incorrect-choice')
    choice3.classList.remove('incorrect-choice')
    choice4.classList.remove('incorrect-choice')



    nextQuestion();
});

//---------------------------------------
// Conditionals for choices chosen
choice1.addEventListener("click", () => {
    if (questions[currentQuestion].rightChoice === 'choice1') {
        score += 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice1.classList.add('correct-choice')

    } else {
        score -= 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice1.classList.add('incorrect-choice');
        time = time - 5000;

    }
});
choice2.addEventListener("click", () => {
    if (questions[currentQuestion].rightChoice === 'choice2') {
        score += 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice2.classList.add('correct-choice')
    } else {
        score -= 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice2.classList.add('incorrect-choice')
        time = time - 5000;

    }
});
choice3.addEventListener("click", () => {
    if (questions[currentQuestion].rightChoice === 'choice3') {
        score += 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice3.classList.add('correct-choice')
    } else {
        score -= 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice3.classList.add('incorrect-choice')
        time = time - 5000;

    }
});
choice4.addEventListener("click", () => {
    if (questions[currentQuestion].rightChoice === 'choice4') {
        score += 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice4.classList.add('correct-choice')
    } else {
        score -= 10;
        localStorage.setItem('score', JSON.stringify(score));
        choice4.classList.add('incorrect-choice')
        time = time - 5000;

    }
});

runGame();







