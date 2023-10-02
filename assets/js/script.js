const triviaHeading = document.getElementById("trivia-heading");
const triviaMenu = document.getElementById("trivia-menu");
const gameRules = document.getElementById("rules");
const difficultySetting = document.getElementById("difficulty-setting");
const triviaArea = document.getElementById("trivia-area");
const mainAnswerArea = document.getElementById("main-answer-area");
const nextButton = document.getElementById("next-button");
const timeDisplay = document.getElementById("timer");
const questionImage = document.getElementById("question-image");
const closeDifficulty = document.getElementById("close-difficulty");
const popup = document.getElementById("pop-up");
const closePopupButton = document.getElementById("close-popup");
// variable yet to be defined

let correctAnswer;
let timeLeft;
let timerInterval;
let score = 0;
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
            const difficulty = this.getAttribute("id");
            startTrivia(difficulty);
        });
    });


    /*Gets the "end game" button to quit the quiz 
      and adds an event listener to it*/
    const endButton = document.getElementById("close-game");
    endButton.addEventListener("click", closeTrivia);

};
/** 
 * This function will begin trivia based on user selection.
 */
function startTrivia(difficulty) {
    triviaArea.classList.remove("hide");
    let questions;

    switch (difficulty) {
        case "easy":
            questions = padawanQuestions;
            break;
        case "medium":
            questions = jediKnightQuestions;
            break;
        case "hard":
            questions = jediMasterQuestions;
            break;
        default:
            // Handle unknown difficulty level
            return;
    }

    shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 15);
    currentQuestionIndex = 0;
    nextQuestion();
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
    clearInterval(timerInterval);
    resetScore();
}
/**
 * This function will display the next set of trivia content for the user
 * until max number of questions is reached then will take user to the final
 * results page.
 */
function nextQuestion() {
    clearInterval(timerInterval); // this will stop the timer form counting
    if (currentQuestionIndex < 15) {
        resetQuizContent();
        displayTriviaContent(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
        timer();
    } else {
        finalResult();
    }
}
/**This finction will display the trivia content 
 */
function displayTriviaContent(question) {
    //displays the question container
    const questionContainer = document.getElementById("question");
    questionContainer.innerText = question.question;

    const questionImage = document.createElement('img');
    questionImage.alt = 'Question Image';
    questionImage.src = question.imgUrl;

    // Shuffles the answer array
    shuffleArray(question.answers);

    // a button is created for each answer associated with the question.
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.id = "correct";
        } else {
            button.classList.add("incorrect");
        }

        // insert an event listener to button and appends it to the answer area
        button.addEventListener("click", checkAnswer);
        mainAnswerArea.appendChild(button);
    });
    displayQuestionNumber();
}

/** Function to shuffle an array randomly*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
/**This function will display the question number*/
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
    displayPopup();
    clearInterval(timerInterval); //This will stop the timer from counting.
    mainAnswerArea.classList.add("no-pointer"); // this will prevent user form clicking when timer runs out

    // retrieves incorrect answers and adds class for incorrect answers to them.
    const wrongAnswers = document.querySelectorAll('.incorrect');
    for (let wrongAnswer of wrongAnswers) {
        wrongAnswer.classList.add('wrong-answer');
    }
    // retrieves correct answer and adds class for correct answers to them.
    correctAnswer = document.getElementById("correct");
    correctAnswer.classList.add("correct-answer");
    nextButton.classList.remove("hide");
}

function displayPopup() {
    popup.classList.remove("hide");
    triviaArea.classList.add("hide");
}

function closePopup() {
    popup.classList.add("hide");
    triviaArea.classList.remove("hide");
}

closePopupButton.addEventListener("click", closePopup);

/**This function will check what answer the user
 * has selected, then show the user if they are correct
 * or incorrect.
 */
function checkAnswer(event) {
    clearInterval(timerInterval); //this will stop the timer from counting.
    mainAnswerArea.classList.add("no-pointer"); // this will prevent user form clicking when answer is selected.
    correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    correctAnswer.classList.add("correct-answer");
    if (clickedButton === correctAnswer) {
        incrementScore();
    } else {
        this.classList.add("wrong-answer");
    }
    nextButton.classList.remove("hide"); // should display the next question button.
}
/* Listens for the user to click the next question button
    and call the function for the next question. */

nextButton.addEventListener("click", nextQuestion);

/**
 * gets the users current score in inrecments that score by 1.
 */

// the idea of how to implement this code was taken 
// form the love maths walk through project.

function incrementScore() {
    score = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++score;
}
/* Listens for the user to click the next question button
    and call the function for the next question. */

nextButton.addEventListener("click", nextQuestion);

/**
 * gets the users current score in inrecments that score by 1.
 */

// the idea of how to implement this code was taken 
// form the love maths walk through project.

function incrementScore() {
    score = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++score;
}

const movieQuote = document.getElementById("movie-quote");

function displayTextFinalScore(score) {
    if (score === 15) {
        return "Well done Master";
    } else if (score >= 10 && score <= 14) {
        return "You are on this council but we do not grant you the rank of master";
    } else if (score <= 9) {
        return "You have been trained well.... but your not a Jedi yet!";
    }
}
// created a function that will reset the quiz content
function resetQuizContent() {
    nextButton.classList.add("hide"); // will hide the next question button.
    mainAnswerArea.classList.remove("no-pointer"); //allows user to click again in answer area.
    timeLeft = 16; // will reset the max amount of time
    startTimer(); // will reset the interval for the timer.

    // will remove previous answer options
    while (mainAnswerArea.firstChild) {
        mainAnswerArea.removeChild(mainAnswerArea.firstChild);
    }
}
/**Think function will display the final results and a message 
 * to the user depending on their score
 */
function finalResult() {
    const scoreText = displayTextFinalScore(score);
    movieQuote.innerText = scoreText;
    const triviaComplete = document.getElementById("trivia-complete");
    const finalScore = document.getElementById("final-score");
    triviaArea.classList.add("hide");
    triviaHeading.classList.remove("hide");
    triviaComplete.classList.remove("hide");
    finalScore.innerText = score; // will display final result for the user


    /* Generates the buttons with the class "trivia-complete-btn" and
    adds event listener to then */

    const endOfTriviaButtons = document.querySelectorAll(".trivia-complete-button");
    endOfTriviaButtons.forEach((endOfTriviaButton) => {
        endOfTriviaButton.addEventListener("click", function () {
            resetScore();
            triviaComplete.classList.add("hide");
            if (this.getAttribute("id") === "retry-button") {
                triviaDifficultyPromt();
            } else if (this.getAttribute("id") === "main-menu-button") {
                triviaMenu.classList.remove("hide");
            }
        });
    });
}
/**
 * Will reset the score for the user when a new quiz 
 * is started.
 */
function resetScore() {
    score = document.getElementById("user-score");
    score.innerText = 0;
}