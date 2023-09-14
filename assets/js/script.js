const triviaHeading = document.getElementById("trivia-heading");
const triviaMenu = document.getElementById("trivia-menu");
const gameRules = document.getElementById("rules");
const difficultySetting = document.getElementById("difficulty-setting");
const triviaArea = document.getElementById("trivia-area");
const mainAnswerArea = document.getElementById("main-answer-area");
const nextButton = document.getElementById("next-button");

// variable yet to be defined

let correctAnswer;
let timeLeft;
let timerInterval;
let score;
let currentQuestionIndex;
let shuffledQuestions;

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

            /*Gets the "end game" button to quit the quiz 
              and adds an event listener to it*/
            const endButton = document.getElementById("close-game");
            endButton.addEventListener("click", closeTrivia);

        });
    });
}

/**
 * Hides difficulty menu and displays the main menu to user.
 */
function closeDifficultyPromt() {
    currentQuestionIndex = 0;
    difficultySetting.classList.add("hide");
    triviaHeading.classList.remove("hide");
    triviaMenu.classList.remove("hide");

}

/** 
 * Hides Triva game and returns user to the main menu.
 */
function closeTrivia() {
    triviaArea.classList.add("hide");
    triviaHeading.classList.remove("hide");
    triviaMenu.classList.remove("hide");
    currentQuestionIndex = 0;
}

function startPadawanTrivia() {
    triviaArea.classList.remove("hide");
    shuffledQuestions = padawanQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    nextQuestion();
}

function startJediKnightTrivia() {
    triviaArea.classList.remove("hide");

}

function startJediMasterTrivia() {
    triviaArea.classList.remove("hide");
}



function nextQuestion() {
    displayTriviaContent(shuffledQuestions[currentQuestionIndex]);

}

function displayTriviaContent(question) {
    //displays the question container
    const questionContainer = document.getElementById("question");

    // insert question content
    questionContainer.innerText = question.question;

    // a button is created for each answer associated with the question.
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.id = "correct";
        } else {
            button.classList.add("inncorect");
        }

        // insert an event listener to button and appends it to the answer area
        button.addEventListener("click", checkAnswer);
        mainAnswerArea.appendChild(button);
    });

    displayQuestionNumber();
}

function displayQuestionNumber() {
    const questionNumber = document.getElementById("trivia-number");
    questionNumber.innerText = currentQuestionIndex + 1;
}

/* insperation on how to implement code for the timer function 
    were taken from https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz */

/**
 * Sets the interval time for the timer function
 */

function startTimer() {
    timerInterval = setInterval(timer, 1000);
}

/**
 * Checks whither the remaining time is above 0
 * and decrements time if it is so. 
 * Otherwise, timeup function will be called.
 */

function timer() {
    if (timeLeft <= 0) {
        timeup();
    } else {
        timeLeft--;
    }
    timeDisplay.innerHTML = 'Time: ' + timeLeft;
}

/**
 * creates an alert message that the users time is up
 * and provides feedback on correct and incorrect answers.
 */

function timeup() {
    alert("time run out you have!");
    clearInterval(timerInterval); //This will stop the timer from counting.
    mainAnswerArea.classList.add("no-pointer"); // this will prevent user form clicking when timer runs out

    // retrieves incorrect answers and adds class for incorrect answers to them.
    const wrongAnswers = document.querySelectorAll('.incorrect');
    for (let wrongAnswer of wrongAnswers) {
        wrongAnswer.classList.add('wrong-answer');
    }

    // retrieves correct answer and adds class for correct answers to them.
    correctAnswer = document.getElementById("correct");
    nextbutton.classList.remove("hide");
}

function checkAnswer(event) {
    clearInterval(timerInterval); //this will stop the timer from counting.
    mainAnswerArea.classList.add("no-pointer"); // this will prevent user form clicking when answer is selected.
    correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    if (clickedButton === correctAnswer) {
        incrementScore();
    } else {
        this.classList.add("wrong-answer");
    }
    nextbutton.classList.remove("hide"); // should display the next question button.
}

