let homeScore = document.querySelector("#home-score");
let guestScore = document.querySelector("#guest-score");

let homeCard = document.querySelector("#home-card");
let guestCard = document.querySelector("#guest-card");

let scores = [];
let savedScores = document.querySelector("#saved-scores");
let clearSaved = document.querySelector("#clear-saved");

let noSaved = document.querySelector("#no-saved");

function main() {
    displayHomeScore();
    displayGuestScore();
}
main();

// Display the HOME score
function displayHomeScore() {
    homeScore.textContent = Number("0");
}

// Display the GUEST score
function displayGuestScore() {
    guestScore.textContent = Number("0");
}


// Add 1 point to HOME score
function add1toHomeScore() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
}

// Add 2 points to HOME score
function add2toHomeScore() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
}

// Add 3 points to HOME score
function add3toHomeScore() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
}


// Add 1 point to GUEST score
function add1toGuestScore() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
}

// Add 2 points to GUEST score
function add2toGuestScore() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
}

// Add 3 points to GUEST score
function add3toGuestScore() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
}

// Clear the Scoreboard button
function clearScores() {
    homeScore.textContent = Number("0");
    guestScore.textContent = Number("0");
}

// Clear HOME score
function clearHomeScore() {
    homeScore.textContent = Number("0");
}

// Clear GUEST score
function clearGuestScore() {
    guestScore.textContent = Number("0");
}

// Save score
function saveScores() {
    scores.push({
        homeScore: homeScore.textContent,
        guestScore: guestScore.textContent,
    });
    displaySavedScores();
    enableClearButton();
    removeNoSavedText();
    clearScores();
}

// Display saved scores
function displaySavedScores() {
    let lastScore = scores[scores.length - 1];
    let span = document.createElement("span");
    span.classList.add("badge", "bg-success");
    span.textContent = `${lastScore.homeScore} : ${lastScore.guestScore}`;
    savedScores.appendChild(span);
    let space = document.createElement("span");
    space.textContent = " ";
    savedScores.appendChild(space);
}

// Clear saved scores
function clearSavedScores() {
    savedScores.innerHTML = "";
    scores = [];
    disableClearButton();
    addNoSavedText();
}

function removeNoSavedText() {
    noSaved.classList.add("d-none");
}

function addNoSavedText() {
    noSaved.classList.remove("d-none");
}

function enableClearButton() {
    clearSaved.classList.remove("disabled");
}

function disableClearButton() {
    clearSaved.classList.add("disabled");
}