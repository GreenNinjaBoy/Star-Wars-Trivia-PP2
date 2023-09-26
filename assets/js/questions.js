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
            { text: "Bobba Fett", correct: false },
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
        answers: [
            { text: "Green", correct: false },
            { text: "Purple", correct: false },
            { text: "Blue", correct: true },
            { text: "Yellow", correct: false },
        ]
    },
    {
        question: "Who is the main antagonist in Star Wars Episode I: The Phantom Menace?",
        answers: [
            { text: "Luke Skywalker", correct: false },
            { text: "Obi-Wan Kenobi", correct: false },
            { text: "Anakin SkyWalker", correct: false },
            { text: "Darth Maul", correct: true },
        ]
    },
    {
        question: "What is the name of Anakin Skywalkers mother?",
        answers: [
            { text: "Padme Amidala", correct: false },
            { text: "Shmi Skywalker", correct: true },
            { text: "Leia Orgama", correct: false },
            { text: "Rey", correct: false },
        ]
    },
    {
        question: "Who is the sith lord who wields a double-bladed lightsaber?",
        answers: [
            { text: "Count Dooku", correct: false },
            { text: "Darth Sidious", correct: false },
            { text: "Darth Maul", correct: true },
            { text: "Darth Vader", Correct: false },
        ]
    },
    {
        question: "What is the name of Han Solo's ship?",
        answers: [
            { text: "Millennium Falcon", correct: true },
            { text: "TIE Fighter", correct: false },
            { text: "X-wing", correct: false },
            { text: "Slaver 1", correct: false },
        ]
    },
    {
        question: "Who is Darth Vader's son in the original Trilogy?",
        answers: [
            { text: "Luke Skywalker", correct: true },
            { text: "Anakin Skywalker", correct: false },
            { text: "Obi-Wan Kenobi", correct: false },
            { text: "Han Solo", correct: false },
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
            { text: "R2-D2", correct: false },
            { text: "Chewbacca", correct: true },
            { text: "C-3PO", correct: false },
            { text: "lando Calrissian", correct: false },
        ]
    },
    {
        question: "Who is the Sith apprentice of Emperor Palpatine in 'Star Wars: Episode III - Revenge of the Sith'?",
        answers: [
            { text: "Darth Vader", correct: false },
            { text: "Darth Sidious", correct: false },
            { text: "Darth Maul", correct: false },
            { text: "Darth Tyranus", correct: true },

        ]
    },
    {
        question: "Which iconic starship makes its first appearance in 'Star Wars: Episode IV - A New Hope'",
        answers: [
            { text: "TIE Fighter", correct: false },
            { text: "X-wing Starfighter", correct: false },
            { text: "Slave I", correct: false },
            { text: "Millennium Falcon", correct: true },
        ]
    },
    {
        question: "In 'Star Wars: Episode VIII - The Last Jedi,' who is the Supreme Leader of the First Order?",
        answers: [
            { text: "Kylo Ren", correct: false },
            { text: "Captain Phasma", correct: false },
            { text: "General Hux", correct: false },
            { text: "Snoke", correct: true },
        ]
    },
    {
        question: "What is the name of Anakin Skywalker's podracing rival?",
        answers: [
            { text: "Sebulba", correct: true },
            { text: "Watto", correct: false },
            { text: "Kit Fisto", correct: false },
            { text: "Plo Koon", correct: false },
        ]
    },
    {
        question: "In 'Star Wars: Episode VII - The Force Awakens,' who is the son of Han Solo and Princess Leia?",
        answers: [
            { text: "Finn", correct: false },
            { text: "Kylo Ren", correct: true },
            { text: "Poe Dameron", correct: false },
            { text: "BB-8", correct: false },
        ]
    },
    {
        question: "Name the planet where the final battle between the Resistance and the First Order takes place in Episode IX.",
        answers: [
            { text: "Coruscant", correct: false },
            { text: "Jakku", correct: false },
            { text: "Endor", correct: false },
            { text: "Exegol", correct: true },
        ]
    },
    {
        question: " who trains Luke Skywalker in the ways of the Force in Episode V?",
        answers: [
            { text: "Yoda", correct: true },
            { text: "Qui-Gon Jinn", correct: false },
            { text: "Mace Windu", correct: false },
            { text: "Obi-Wan Kenobi", correct: false },
        ]
    },
    {
        question: "What is the primary weapon used by the Imperial AT-AT?",
        answers: [
            { text: "Blasters", correct: false },
            { text: "Lightsabers", correct: false },
            { text: "Ion Cannons", correct: false },
            { text: "Laser Cannons", correct: true },
        ]
    },
    {
        question: "Who disguises themselves as a bounty hunter and rescues Han Solo from Jabba the Hutt?",
        answers: [
            { text: "Princess Leia", correct: true },
            { text: "Lando Calrissian", correct: false },
            { text: "Chewbacca", correct: false },
            { text: "Boba Fett", corect: false }
        ]
    },
    {
        question: "Name of the desert planet where Rey is initially introduced",
        answers: [
            { text: "Tatooine", correct: false },
            { text: "Jakku", correct: true },
            { text: "Naboo", correct: false },
            { text: "Hoth", correct: false },
        ]
    },
    {
        question: "Who is the Rebel leader and princess who plays a key role in the original Star Wars trilogy?",
        answers: [
            { text: "Padmé Amidala", correct: false },
            { text: "Jyn Erso", correct: false },
            { text: "Princess Leia Organa", correct: true },
            { text: "Mon Mothma", correct: false },
        ]
    },
    {
        question: "Who wields a purple lightsaber in the Star Wars prequels?",
        answers: [
            { text: "Mace Windu", correct: true },
            { text: "Obi-Wan Kenobi", correct: false },
            { text: "Count Dooku", correct: false },
            { text: "Anakin Skywalker", correct: false },
        ]
    }
];
const jediMasterQuestions = [
    {
        question: "who was the announcer who provided colorful commentary during the Boonta Eve podrace?",
        answers: [
            { text: "Fode and Beed", correct: true },
            { text: "Watto", correct: false },
            { text: "Sebulba", correct: false },
            { text: "Jabba the Hutt", correct: false },
        ]
    },
    {
        question: "Who was the architect behind the creation of the Clone Army?",
        answers: [
            { text: "Count Dooku", correct: false },
            { text: "Darth Sidious", correct: false },
            { text: "Jango Fett", correct: false },
            { text: "Sifo-Dyas", correct: true },
        ]
    },
    {
        question: "Which Jedi Master was known for wielding a purple lightsaber?",
        answers: [
            { text: "Qui-Gon Jinn", correct: false },
            { text: "Obi-Wan Kenobi", correct: false },
            { text: "Jango Fett", correct: false },
            { text: "Mace Windu", correct: true },
        ]
    },
    {
        question: "Who owned the droid R5-D4 before it malfunctioned and was purchased by Luke Skywalker in Episode IV?",
        answers: [
            { text: "Uncle Owen", correct: false },
            { text: "Biggs Darklighter", correct: false },
            { text: "Owen Lars", correct: false },
            { text: "Jawas", correct: true },
        ]
    },
    {
        question: "What were the first words spoken by Darth Vader when he appears in his suit in Episode III?",
        answers: [
            { text: "I am your father", correct: false },
            { text: "You underestimate my power!", correct: false },
            { text: "This is the end for you, my master.", correct: false },
            { text: "Yes Master", correct: true },
        ]
    }
];