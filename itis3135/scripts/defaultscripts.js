// Display current date and time
function displayDateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = `Today is ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} on ${date.toLocaleDateString('en-US', options)}`;
    document.getElementById('dateTimeDisplay').textContent = formattedDate;
}

// Greet the user based on their input
function greetUser() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    document.getElementById('greetingDisplay').textContent = `The Animal Company welcomes you, ${userName}! We're glad you are doing ${userMood}!`;
}

// Display polygon name based on user input
function displayPolygon() {
    const polygonNames = ["monogon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"];
    let favNumber = Math.abs(Math.round(document.getElementById('favNumber').value));

    if (favNumber < 0 || favNumber > 10) {
        alert("Please enter a number between 0 and 10.");
    } else {
        alert(`The polygon with ${favNumber} sides is called a ${polygonNames[favNumber - 1] || 'unknown shape'}.`);
    }
}

// Random Functions for Animal Brand
function randomFunction1() {
    alert("Did you know? Elephants are the only animals that can't jump.");
}

function randomFunction2() {
    alert("Why don't sharks eat clowns? Because they taste funny!");
}

function randomFunction3() {
    let humanAge = prompt("Enter your age:");
    let animalAge = humanAge * 7; // Example for dog years
    alert(`If you were a dog, you'd be ${animalAge} years old!`);
}

function randomFunction4() {
    alert("An inspiring animal quote: 'The greatness of a nation can be judged by the way its animals are treated.' - Mahatma Gandhi");
}

function randomFunction5() {
    const animalNames = ["Barky", "Claws", "Whiskers", "Paws", "Fangs"];
    const randomIndex = Math.floor(Math.random() * animalNames.length);
    alert(`Your random animal name is: ${animalNames[randomIndex]}`);
}

// Update the validator URLs dynamically
function updateValidatorLinks() {
    const currentURL = window.location.href;
    document.getElementById('htmlValidator').href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(currentURL)}`;
    document.getElementById('cssValidator').href = `https://jigsaw.w3.org/css-validator/validator?uri=${encodeURIComponent(currentURL)}`;
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    updateValidatorLinks();
});
