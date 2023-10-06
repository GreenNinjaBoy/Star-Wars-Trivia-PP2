/*jshint esversion: 6*/
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
    },
    {
        question: "Darth Vader's birth name was Anakin Skywalker.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Princess Leia was trained as a Jedi Knight.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Luke Skywalker lost his hand in a lightsaber duel with Darth Vader.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Yoda was the last of the Jedi Knights.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The Death Star was destroyed in both Episode IV and Episode VI.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Darth Maul survived his encounter with Obi-Wan Kenobi.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "The Jedi Council trained Anakin Skywalker despite his age.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Han Solo and Princess Leia had a daughter named Rey.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Darth Vader killed Obi-Wan Kenobi in a lightsaber duel.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Rey's parents were revealed to be significant characters in the Star Wars saga.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "The Millennium Falcon was originally owned by Lando Calrissian.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Yoda trained Count Dooku as a Jedi.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Anakin Skywalker was a podracing champion on Tatooine.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Padmé Amidala was the Queen of Naboo before becoming a Senator.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Darth Sidious was Emperor Palpatine's Sith apprentice.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    }
];
