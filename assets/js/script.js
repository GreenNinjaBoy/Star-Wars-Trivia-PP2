const triviaHeading = document.getElementById("trivia-heading");
const triviaMenu = document.getElementById("trivia-menu");
const gameRules = document.getElementById("game-rules");
const difficultySetting = document.getElementById("difficulty-setting");
const triviaArea = document.getElementById("trivia-area");
const mainAnswerArea = document.getElementById("main-answer-area");


/* wait for the DOM to succesfully load before executing the first function
which will deliver the menu buttons to the user and add event liseners to these buttons*/

document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = this.querySelectorAll(".menu-btn");
    menuButtons.forEach(menuButton) => {
        menuButton.addEventListener("click", function () {
            if (this.getAttribute("id") === "rules-btn") {
                displayGameRules();
            } else if (this.getAttribute("id") === "trivia-btn") {
                triviaDifficultyPromt();
            }
        });
    }
});




function displayGameRules() {

}

function closeRules() {

}

function triviaDifficultyPromt() {

}

function closeDifficultyPromt() {

}

function closeTrivia() {

}

function startPadawanTrivia() {

}

function startJediKnightTrivia() {

}

function startJediMasterTrivia() {

}

function nextQuestion() {

}

function displayTriviaContent() {

}

function displayQuestionNumber() {

}