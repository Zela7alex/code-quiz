var highScoresList = document.getElementById("highScoresList");


var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

var score = JSON.parse(localStorage.getItem("score"));
console.log(score);
highScores.push(score);
console.log(highScores);

localStorage.setItem("highScores", JSON.stringify(highScores));


highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score}</li>`;
    })
    .join("")
