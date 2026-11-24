
function sortHouse(house) {
    document.getElementById("result").innerText =
        "The Sorting Hat has chosen: " + house + "!";
}

const houseDetails = {
    Gryffindor: {
        icon: "🦁",
        founder: "Godric Gryffindor",
        colors: "Scarlet and Gold",
        traits: "Bravery, Courage, Determination",
        description: "The house of the brave and daring."
    },

    Slytherin: {
        icon: "🐍",
        founder: "Salazar Slytherin",
        colors: "Green and Silver",
        traits: "Ambition, Cunning, Resourcefulness",
        description: "The house of ambition and determination."
    },

    Ravenclaw: {
        icon: "🦅",
        founder: "Rowena Ravenclaw",
        colors: "Blue and Bronze",
        traits: "Wisdom, Intelligence, Creativity",
        description: "The house of wisdom and knowledge."
    },

    Hufflepuff: {
        icon: "🦡",
        founder: "Helga Hufflepuff",
        colors: "Yellow and Black",
        traits: "Loyalty, Patience, Fairness",
        description: "The house of loyalty and hard work."
    }
};

function showHouse(name) {
    const house = houseDetails[name];

    document.getElementById("houseInfo").innerHTML = `
        <h2>${house.icon} ${name}</h2>
        <h3>Founder: ${house.founder}</h3>
        <p>House Colors: ${house.colors}</p>
        <p>Traits: ${house.traits}</p>
        <p>${house.description}</p>
    `;

    document.getElementById("houseInfo")
        .scrollIntoView({ behavior: "smooth" });
}

const sortingQuestions = [
    {
        q: "Which quality matters most to you?",
        a: [
            ["Courage", "Gryffindor"],
            ["Ambition", "Slytherin"],
            ["Wisdom", "Ravenclaw"],
            ["Loyalty", "Hufflepuff"]
        ]
    },
    {
        q: "What would you do when facing danger?",
        a: [
            ["Face it bravely", "Gryffindor"],
            ["Find an advantage", "Slytherin"],
            ["Analyze the situation", "Ravenclaw"],
            ["Protect my friends", "Hufflepuff"]
        ]
    },
    {
        q: "Choose a magical object.",
        a: [
            ["A legendary sword", "Gryffindor"],
            ["An ancient ring", "Slytherin"],
            ["A mysterious book", "Ravenclaw"],
            ["A loyal magical companion", "Hufflepuff"]
        ]
    },
    {
        q: "What do you fear the most?",
        a: [
            ["Being unable to help", "Gryffindor"],
            ["Failure", "Slytherin"],
            ["Ignorance", "Ravenclaw"],
            ["Betraying someone", "Hufflepuff"]
        ]
    },
    {
        q: "Choose a place to explore.",
        a: [
            ["A forbidden forest", "Gryffindor"],
            ["An underground chamber", "Slytherin"],
            ["An ancient library", "Ravenclaw"],
            ["A peaceful garden", "Hufflepuff"]
        ]
    },
    {
        q: "What is your greatest strength?",
        a: [
            ["Bravery", "Gryffindor"],
            ["Determination", "Slytherin"],
            ["Intelligence", "Ravenclaw"],
            ["Kindness", "Hufflepuff"]
        ]
    },
    {
        q: "What would you value in a friend?",
        a: [
            ["Fearlessness", "Gryffindor"],
            ["Confidence", "Slytherin"],
            ["Curiosity", "Ravenclaw"],
            ["Trustworthiness", "Hufflepuff"]
        ]
    },
    {
        q: "Choose a magical subject.",
        a: [
            ["Defence Against the Dark Arts", "Gryffindor"],
            ["Potions", "Slytherin"],
            ["Charms", "Ravenclaw"],
            ["Herbology", "Hufflepuff"]
        ]
    },
    {
        q: "How do you solve a difficult problem?",
        a: [
            ["Take action", "Gryffindor"],
            ["Plan strategically", "Slytherin"],
            ["Research carefully", "Ravenclaw"],
            ["Ask others for help", "Hufflepuff"]
        ]
    },
    {
        q: "Choose a magical creature.",
        a: [
            ["Phoenix", "Gryffindor"],
            ["Basilisk", "Slytherin"],
            ["Eagle Owl", "Ravenclaw"],
            ["Niffler", "Hufflepuff"]
        ]
    },
    {
        q: "What motivates you?",
        a: [
            ["Doing what is right", "Gryffindor"],
            ["Achieving greatness", "Slytherin"],
            ["Discovering the truth", "Ravenclaw"],
            ["Helping others", "Hufflepuff"]
        ]
    },
    {
        q: "Choose a place at Hogwarts.",
        a: [
            ["The Great Hall", "Gryffindor"],
            ["The Dungeons", "Slytherin"],
            ["The Library", "Ravenclaw"],
            ["The Greenhouses", "Hufflepuff"]
        ]
    },
    {
        q: "What would you do with power?",
        a: [
            ["Defend the innocent", "Gryffindor"],
            ["Build a legacy", "Slytherin"],
            ["Learn its secrets", "Ravenclaw"],
            ["Use it to help people", "Hufflepuff"]
        ]
    },
    {
        q: "Which word describes you best?",
        a: [
            ["Fearless", "Gryffindor"],
            ["Resourceful", "Slytherin"],
            ["Thoughtful", "Ravenclaw"],
            ["Patient", "Hufflepuff"]
        ]
    },
    {
        q: "What is your ideal legacy?",
        a: [
            ["A story of courage", "Gryffindor"],
            ["A remarkable achievement", "Slytherin"],
            ["A discovery that changes the world", "Ravenclaw"],
            ["A life that made others happier", "Hufflepuff"]
        ]
    }
];

let currentQuestion = 0;

let houseScores = {
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0
};

function displayQuestion() {
    const question = sortingQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} / 15`;

    document.getElementById("quizQuestion").textContent =
        question.q;

    document.getElementById("quizProgress").textContent =
        `Progress: ${Math.round((currentQuestion / 15) * 100)}%`;

    const answers = document.getElementById("quizAnswers");

    answers.innerHTML = "";

    question.a.forEach(([answer, house]) => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function() {
            houseScores[house]++;
            currentQuestion++;

            if (currentQuestion < sortingQuestions.length) {
                displayQuestion();
            } else {
                finishQuiz();
            }
        };

        answers.appendChild(button);
    });
}

function finishQuiz() {
    let winner = Object.keys(houseScores).sort(
        (a, b) => houseScores[b] - houseScores[a]
    )[0];

    const descriptions = {
        Gryffindor: "You are brave, daring and determined!",
        Slytherin: "You are ambitious, clever and resourceful!",
        Ravenclaw: "You are intelligent, creative and curious!",
        Hufflepuff: "You are loyal, patient and fair!"
    };

    document.getElementById("quizBox").style.display = "none";

    document.getElementById("quizResult").style.display = "block";

    document.getElementById("quizHouse").textContent =
        "Welcome to " + winner + "!";

    document.getElementById("quizDescription").textContent =
        descriptions[winner];
}

function restartQuiz() {
    currentQuestion = 0;

    houseScores = {
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0
    };

    document.getElementById("quizBox").style.display = "block";

    document.getElementById("quizResult").style.display = "none";

    displayQuestion();
}

displayQuestion();

function chooseWand() {
    const woods = [
        "Holly",
        "Elder",
        "Oak",
        "Willow",
        "Cherry",
        "Yew",
        "Rowan",
        "Ash"
    ];

    const cores = [
        "Phoenix Feather",
        "Dragon Heartstring",
        "Unicorn Hair"
    ];

    const wood = woods[Math.floor(Math.random() * woods.length)];

    const core = cores[Math.floor(Math.random() * cores.length)];

    const length = (10 + Math.random() * 4).toFixed(2);

    document.getElementById("wandResult").innerHTML = `
        <h3>Your Wand Has Chosen You!</h3>
        <p>Wood: ${wood}</p>
        <p>Core: ${core}</p>
        <p>Length: ${length} inches</p>
    `;
}

function findPatronus() {
    const animals = [
        ["Stag", "Courage and leadership"],
        ["Doe", "Kindness and devotion"],
        ["Wolf", "Loyalty and strength"],
        ["Fox", "Intelligence and cleverness"],
        ["Eagle", "Freedom and vision"],
        ["Horse", "Determination and independence"],
        ["Otter", "Playfulness and curiosity"],
        ["Phoenix", "Rebirth and resilience"],
        ["Swan", "Grace and loyalty"],
        ["Cat", "Independence and intuition"]
    ];

    const animal = animals[
        Math.floor(Math.random() * animals.length)
    ];

    document.getElementById("patronusResult").innerHTML = `
        <h3>Your Patronus is a ${animal[0]}!</h3>
        <p>${animal[1]}</p>
    `;
}

function saveProfile() {
    const name = document
        .getElementById("wizardName")
        .value.trim();

    if (!name) {
        alert("Please enter your wizard name!");
        return;
    }

    localStorage.setItem("wizardName", name);

    document.getElementById("savedProfile").innerHTML = `
        <h3>Welcome, ${name}!</h3>
        <p>Your Hogwarts journey begins.</p>
    `;
}

window.addEventListener("DOMContentLoaded", function() {
    const savedName = localStorage.getItem("wizardName");

    if (savedName) {
        document.getElementById("wizardName").value = savedName;

        document.getElementById("savedProfile").innerHTML = `
            <h3>Welcome back, ${savedName}!</h3>
            <p>Your Hogwarts journey continues.</p>
        `;
    }
});
