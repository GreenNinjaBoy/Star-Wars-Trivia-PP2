const triviaHeading = document.getElementById("trivia-heading");
const triviaMenu = document.getElementById("trivia-menu");
const gameRules = document.getElementById("rules");
const difficultySetting = document.getElementById("difficulty-setting");
const triviaArea = document.getElementById("trivia-area");
const mainAnswerArea = document.getElementById("main-answer-area");


/* wait for the DOM to succesfully load before executing the first function
which will deliver the menu buttons to the user and add event liseners to these buttons*/

document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = this.querySelectorAll(".menu-btn");
    menuButtons.forEach((menuButton) => {
        menuButton.addEventListener("click", function () {
            if (this.getAttribute("id") === "rules-btn") {
                displayGameRules();
            } else if (this.getAttribute("id") === "trivia-btn") {
                triviaDifficultyPromt();
            }
        });
    });
});


/**
 * Whilst displaying the rules, the main menu will be hiddden
 * and will add an event listener for the close button.
 */
function displayGameRules() {
    gameRules.classList.remove("hide");
    triviaHeading.classList.add("hide");
    triviaMenu.classList.add("hide");
    const closeRulesButton = document.getElementById("close-rules");
    closeRulesButton.addEventListener("click", closeRules);

}

/**
 * This function will hide the rules and displays the main menu.
 */
function closeRules() {
    gameRules.classList.add("hide");
    triviaHeading.classList.remove("hide");
    triviaMenu.classList.remove("hide");

}
/**
 * Displays the games difficulty options
 * and when function is exucuted the difficulty buttons will be displayed for the user
 * and add event listeners to the buttons.
 */
function triviaDifficultyPromt() {

    /* this will get the button to close the difficulty menu
    and will add an even listener to the button  */

    const closeDifficulty = document.getElementById("close-difficulty");
    closeDifficulty.addEventListener("click", closeDifficultyPromt);

    //Displays the difficulty menu for the user
    difficultySetting.classList.remove("hide");
    triviaHeading.classList.add("hide");
    triviaMenu.classList.add("hide");

    //Displays difficulty buttons and also adds event listeners to them
    const difficultyOptions = document.querySelectorAll(".difficulty-selection");
    difficultyOptions.forEach((difficultySelection) => {
        difficultySelection.addEventListener("click", function () {
            difficultySetting.classList.add("hide");
            if (this.getAttribute("id") === "easy") {
                startPadawanTrivia();
            } else if (this.getAttribute("id") === "medium") {
                startJediKnightTrivia();
            } else if (this.getAttribute("id") === "hard") {
                startJediMasterTrivia();
            }

            // Allows button to exit the quiz and adds an event listener to it
            //const exitButton = document.getElementById("close-difficulty");
            //exitButton.addEventListener("click", closeDifficulty);
        });
    });
}

function closeDifficultyPromt() {
    difficultySetting.classList.add("hide");
    triviaHeading.classList.remove("hide");
    triviaMenu.classList.remove("hide");

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