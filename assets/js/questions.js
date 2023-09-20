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
        question: "who did Qui-Gon meet on Tatooine?",
        answers: [
            { text: "Luke Skywalker", correct: false },
            { text: "Bobba Feat", correct: false },
            { text: "Anakin Skywalker", correct: true },
            { text: "Jabba the Hutt", correct: false },
        ]
    },
    {
        question: "What planet does Luke Skywalker call home?",
        answers: [
            { text: "Tatooine", correct: true },
            { text: "Corasant", correct: false },
            { text: "Naboo", correct: false },
            { text: "Endor", correct: false },
        ]
    },
    {
        question: "Who is obi-wan Kenobis master?",
        answers: [
            { text: "Yoda", correct: false },
            { text: "Count Duku", correct: false },
            { text: "Mace Windu", correct: false },
            { text: "Qui-gon Jinn", correct: true },
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
    {
        imgUrl: "assets/images/qui-gon-jinn.webp",
        question: "Name the Character",
        answers: [
            { text: "Yoda", correct: false },
            { text: "Qui-Gon Jinn", correct: true },
            { text: "Mace Windu", correct: false },
            { text: "Luke Skywalker", correct: false },
        ]
},
{
    imgUrl: "assets/images/yoda-attack-of-the-clones.jpg",
    question: "Name the Character",
    answers: [
        { text: "Yoda", correct: true },
        { text: "Qui-Gon Jinn", correct: false },
        { text: "Mace Windu", correct: false },
        { text: "Luke Skywalker", correct: false },
    ]
},
{
    question: "What color was Luke Skywalkers first Lishtsaber?",
    answers:[
        {text: "Green", correct: false},
        {text: "Purple", correct:false},
        {text: "Blue", correct: true},
        {text: "Yellow", correct: false},
    ]
},
{
    question: "Who is the main protagonist in Star Wars Episode I: The Phantom Menace?",
    answers:[
        {text: "Luke Skywalker", correct:false},
        {text: "Obi-Wan Kenobi", correct: false},
        {text: "Anakin SkyWalker", correct: false},
        {text: "Darth Maul", correct: true},
    ]
},
{
    question: "What is the name of Anakin Skywalkers mother?",
    answers: [
        {text: "Padme Amidala", correct: false},
        {text: "Shmi Skywalker", correct: true},
        {text: "Leia Orgama", correct: false},
        {text: "Rey", correct: false},
    ]
},
{
    question: "Who is the sith lord who wields a double-bladed lightsaber?",
    answers: [
        {text: "Count Dooku", correct: false},
        {text: "Darth Sidious", correct: false},
        {text: "Darth Maul", correct: true},
        {text: "Darth Vader", Correct: false},
    ]
},
{
    question: "What is the name of Han Solo's ship?",
    answers: [
        {text: "Millennium Falcon", correct: true},
        {text: "TIE Fighter", correct: false},
        {text: "X-wing", correct: false},
        {text: "Slaver 1", correct: false},
    ]
},
{
    question: "Who is Darth Vader's son in the original Trilogy?",
    answers: [
        {text: "Luke Skywalker", correct: true},
        {text: "Anakin Skywalker", correct: false},
        {text: "Obi-Wan Kenobi", correct: false},
        {text: "Han Solo", correct: false},
    ]
},
{
    imgUrl: "assets/images/death-star.webp",
    question: "Name this battle station",
    answers: [
        { text: "The Death Star", correct: true },
        { text: "Star Killer Base", correct: false },
        { text: "Star Destroyer", correct: false },
        { text: "TIE Fighter", correct: false },
    ]
},
{
    imgUrl: "assets/images/han-solo.webp",
    question: "Name the Character",
    answers: [
        { text: "Han Solo", correct: true },
        { text: "Ben Solo", correct: false },
        { text: "Lando Calrissian", correct: false },
        { text: "Luke Skywalker", correct: false },
    ]
},
{
    imgUrl: "assets/images/luke-skywalker.webp",
    question: "Name the Character",
    answers: [
        { text: "Han Solo", correct: false },
        { text: "Ben Solo", correct: false },
        { text: "Lando Calrissian", correct: false },
        { text: "Luke Skywalker", correct: true },
    ]
},
];

const jediKnightQuestions = [
    {
        question: "Who is the director of 'Star Wars: EpisodeIV - A New Hope?",
        answers: [
            { text: "Steven Spielberg", correct: false },
            { text: "J.J Abrams", correct: false },
            { text: "George Lucas", correct: true },
            { text: "Irvin Kershner", correct: false },
        ]
    },
    {
        question: " In Episode II which planet serves as the backdrop for the climactic battle at the end of the film?",
        answers: [
            { text: "Geonosis", correct: true },
            { text: "Endor", correct: false },
            { text: "Naboo", correct: false },
            { text: "Kamino", correct: false },
        ]
    },
    {
        question: "What is the name of the Wookie co-pilot of the Millennium Falcon?",
        answers: [
            {text: "R2-D2", correct: false},
            {text: "Chewbacca", correct: true},
            {text: "C-3PO", correct: false},
            {text: "lando Calrissian", correct: false},
        ]
    }
       
];