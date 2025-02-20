

let humanScore = 0; // Variables to track each player's score.
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3); // Chooses 0, 1 or 2.

    switch (selection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

   
}

const body = document.querySelector("body");
let scoreDisplay = document.createElement("div");
scoreDisplay.setAttribute("id", "score-display");
body.append(scoreDisplay);
scoreDisplay.textContent = 'SCORE: 0 - 0';

scoreDisplay.style.cssText = 
    "font-family: sans-serif;" +
    "margin-top: 10px;" +
    "font-weight: bold;";


const gameOptions = document.querySelector("#game-options");
gameOptions.addEventListener("click", function(event) {
    const humanChoice = event.target.id;
    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            break;
        default:
            return;
    }

    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

});

const restart = document.createElement("button");
restart.textContent = "Play Again";
restart.style.display = "none";
restart.addEventListener("click", (event) => {
    humanScore = computerScore = 0;
    scoreDisplay.textContent = `SCORE: ${humanScore} - ${computerScore}`;
    event.target.style.display = "none";
    gameOver = false;
});

body.append(restart);

function updateScore(h, c) {
    scoreDisplay.textContent = `SCORE: ${humanScore} - ${computerScore}`;
    if (humanScore >= 5 || computerScore >= 5) {
        let result = 
        (humanScore === computerScore) ? "The game was a tie!":
            (humanScore > computerScore) ? "You win!!!" : "You lose :(";
        gameOver = true;
        restart.style.display = "initial";
        alert(result);
        
    }
}


function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    console.log("Computer's choice was " + computerChoice);
    console.log("Your choice was " + humanChoice);



    if (humanChoice === computerChoice) {
        console.log(`Tie! Both chose ${humanChoice}.`);
        humanScore += 0.5;
        computerScore += 0.5;
        updateScore(humanScore, computerScore);
    }

    else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("You lose this round! Paper beats rock.");
            ++computerScore;
            updateScore(humanScore, computerScore);
        }
        else {
            console.log("You win this round! Rock beats scissors.");
            ++humanScore;
            updateScore(humanScore, computerScore);
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("You lose this round! Scissors beats paper.");
            ++computerScore;
            updateScore(humanScore, computerScore);
        }
        else {
            console.log("You win this round! Paper beats rock.");
            ++humanScore;
            updateScore(humanScore, computerScore);
        }
    }
    else {
        if (computerChoice === "Rock") {
            console.log("You lose this round! Rock beats scissors.");
            ++computerScore;
            updateScore(humanScore, computerScore);
        }
        else {
            console.log("You win this round! Scissors beats paper.");
            ++humanScore;
            updateScore(humanScore, computerScore);
        }
    }
    console.log(`Score: ${humanScore} - ${computerScore}`);
}
