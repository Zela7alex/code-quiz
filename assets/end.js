var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("save-score-btn");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

//Turned local storage high score into string then array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
console.log(highScores);


finalScore.innerText = mostRecentScore;


saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(6);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");

    console.log(highScores);
};