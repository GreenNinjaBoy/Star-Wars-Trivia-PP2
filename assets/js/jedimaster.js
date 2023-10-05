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
            { text: "Watto", correct: false },
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
    },
    {
        question: " Who was the captain of the Millennium Falcon before Han solo?",
        answers: [
            { text: "Lando Calrissian", correct: true },
            { text: "Nien Nunb", correct: false },
            { text: "Lobot", correct: false },
            { text: "Ray", correct: false },

        ]
    },
    {
        question: "In Episode I, who served as Queen Amidala's loyal bodyguard and captain of her security force?",
        answers: [
            { text: "Captain Panaka", correct: true },
            { text: " Captain Rex", correct: false },
            { text: "Captain Phasma", correct: false },
            { text: "Captain Needa", correct: false },
        ]
    },
    {
        question: "What ancient Sith artifact did Rey discover on the oceanic moon of Kef Bir?",
        answers: [
            { text: "The Wayfinder", correct: true },
            { text: "The Dagger of Mortis", correct: false },
            { text: "The Sith Holocron", correct: false },
            { text: "The Kyber Crystal", correct: false },
        ]
    },
    {
        question: "What is the name of the Sith Lord who was Emperor Palpatine's master, mentioned in Episode III?",
        answers: [
            { text: "Darth Plagueis", correct: true },
            { text: "Darth Tyranus", correct: false },
            { text: "Darth Revan", correct: false },
            { text: "Darth Nihilusl", correct: false },
        ]
    },
    {
        question: "In Episode VII: The Force Awakens, what organization did Poe Dameron work for?",
        answers: [
            { text: "The Rebel Alliance", correct: false },
            { text: "The Resistance", correct: true },
            { text: "The Galactic Empire", correct: false },
            { text: "The First Order", correct: false }
        ]
    },
    {
        question: "What did Luke Skywalker drink while on Ahch-To in Episode VIII: The Last Jedi?",
        answers: [
            { text: "Blue Milk", correct: true },
            { text: "Yobacca Juice", correct: false },
            { text: "Endorian Ale", correct: false },
            { text: "Womp Rat Whiskey", correct: false }
        ]
    },
    {
        question: "In Episode III: Revenge of the Sith, who killed Mace Windu?",
        answers: [
            { text: "Anakin Skywalker", correct: false },
            { text: "Count Dooku", correct: false },
            { text: "Emperor Palpatine", correct: true },
            { text: "Yoda", correct: false }
        ]
    },
    {
        question: "What is the name of the ancient Jedi texts that Luke Skywalker was guarding on Ahch-To in Episode VIII: The Last Jedi?",
        answers: [
            { text: "The Jedi Code", correct: false },
            { text: "The Journal of the Whills", correct: true },
            { text: "The Sacred Scrolls", correct: false },
            { text: "The Force Unleashed", correct: false }
        ]
    },
    {
        question: "What type of creature did Rey use as a mount on Pasaana in Episode IX: The Rise of Skywalker?",
        answers: [
            { text: "Bantha", correct: false },
            { text: "Tauntaun", correct: false },
            { text: "Fathier", correct: true },
            { text: "Blurrg", correct: false }
        ]
    },
    {
        question: "In Episode VIII: The Last Jedi, what is the name of the casino city on the planet Cantonica?",
        answers: [
            { text: "Mos Eisley", correct: false },
            { text: "Canto Bight", correct: true },
            { text: "Maz Kanata's Castle", correct: false },
            { text: "Jedha City", correct: false }
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