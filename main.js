const wokeStatement = document.getElementById("woke-statement");
const newWokeButton = document.getElementById("new-woke");
let clickCount = 0;

function getRandomStatement() {
    const randomIndex = Math.floor(Math.random() * wokeStatements.length);
    return wokeStatements[randomIndex];
}

function updateWokeStatement() {
    oldStatement = wokeStatement.textContent;
    do {
        var newStatement = getRandomStatement();
    }
    while (newStatement === oldStatement);
    wokeStatement.textContent = newStatement;
    clickCount++;
    if (clickCount % 100 === 0) {
        alert(`You are extremely woke! You have clicked the button ${clickCount} times!`);
    }
}

// Initial statement when page loads
updateWokeStatement();

// Update statement when button is clicked
if (wokeStatements.length > 1) {
    newWokeButton.addEventListener("click", updateWokeStatement);
} else {
    newWokeButton.style.display = "none";
    console.error("You need more woke statements to make this work!");
}
