/* I used the following youtube video to help
   with ideas when implementing the questions for the trivia:
   https://www.youtube.com/watch?v=riDzcEQbX6k*/


// Creating an object containing the Padawan (easy) questions.

const padawanQuestions = [
    {
        question: "What color is yodas lightsaber?",
        answers: [
            { text: "Green", correct: true },
            { text: "Blue", correct: false },
            { text: "Yellow", correct: false },
            { text: "Red", correct: false },
        ]
    },
    {
        question: "What is the title of episode 1?",
        answers: [
            { text: "Return of the Jedi", correct: false },
            { text: "Rise of Skywalker", correct: false },
            { text: "The Clone Wars", correct: false },
            { text: "The Phantom Menece", correct: true },
        ]
    },
    {
        question: "who did Qui-Gon meet on Tatoween?",
        answers: [
            { text: "Luke Skywalker", correct: false },
            { text: "Bobba Feat", correct: false },
            { text: "Anikin Skywalker", correct: true },
            { text: "Jabba the Hutt", correct: false },
        ]
    },
    {
        question: "What planet did Luke Skywalker grow up on?",
        answers: [
            { text: "Tatoween", correct: true },
            { text: "Corasant", correct: false },
            { text: "Naboo", correct: false },
            { text: "Geo-nosis", correct: false },
        ]
    },
    {
        question: "Who is obi-wan Kenobis master?",
        answers: [
            { text: "Yoda", correct: false },
            { text: "Count Duku", correct: false },
            { text: "Mace Windu", correct: false },
            { text: "Qui-gon Gin", correct: true },
        ]
    },
    {
        question: "who did Qui-Gon meet on Tatoween?",
        answers: [
            { text: "Luke Skywalker", correct: false },
            { text: "Bobba Feat", correct: false },
            { text: "Anikin Skywalker", correct: true },
            { text: "Jabba the Hutt", correct: false },
        ]
    },
    {
        imgUrl: "assets/images/qui-gon-jinn.webp",
        question: "Name the Character",
        answers: [
            { text: "Master Yoda", correct: false },
            { text: "Qui-Gon Jinn", correct: true },
            { text: "Mace Windu", correct: false },
            { text: "Luke Skywalker", correct: false },
        ]
    },
    {
        question: "Where does Luke and Han rescue Leia in 'A New Hope'?",
        answers: [
            { text: "The Death Star", correct: true },
            { text: "Alderaan", correct: false },
            { text: "Tatooine", correct: false },
            { text: "Her crippled starship", correct: false },
        ]
    },
    {
        question: "In the movie 'The Phantom Menace', is Jar Jar binks a Gungan?",
        answers: [
            { text: "Yes", correct: true },
            { text: "no", correct: false },
        ]
    },
    {
        question: "What is Chewbacca's race?",
        answers: [
            { text: "Wookiee", correct: true },
            { text: "Bespinite", correct: false },
            { text: "Ewok", correct: false },
            { text: "Gunganite", correct: false },
        ]
    },
];

const jediKnightQuestions = [
    {
        question: "3",
        answers: [
            { text: "3", correct: false },
            { text: "3", correct: false },
            { text: "3", correct: true },
            { text: "3", correct: false },
        ]
    },
    {
        question: "4",
        answers: [
            { text: "4", correct: true },
            { text: "4", correct: false },
            { text: "4", correct: false },
            { text: "4", correct: false },
        ]
    }
];