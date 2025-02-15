

let humanScore = 0; // Variables to track each player's score.
let computerScore = 0;

function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3); // Chooses 0, 1 or 2.

    switch (selection) {
        case 0:
            return "Rock";
            // break;
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

   
}

function getHumanChoice () {
    let selection = prompt("Rock, paper or scissors?");
    selection = selection.toLowerCase();

    if (selection === "rock") return "Rock";
    else if (selection === "paper") return "Paper";
    else if (selection === "scissors") return "Scissors";
    else {
        console.log("Invalid choice. Please try again!");
        getHumanChoice();
    }
}


function playRound(humanChoice, computerChoice) {

    console.log("Computer's choice was " + computerChoice);
    console.log("Your choice was " + humanChoice);


    if (humanChoice === computerChoice) {
        console.log(`Tie! Both chose ${humanChoice}.`);
        humanScore += 0.5;
        computerScore += 0.5;

    }

    else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("You lose this round! Paper beats rock.");
            ++computerScore;
        }
        else {
            console.log("You win this round! Rock beats scissors.");
            ++humanScore;
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("You lose this round! Scissors beats paper.");
            ++computerScore;
        }
        else {
            console.log("You win this round! Paper beats rock.");
            ++humanScore;
        }
    }
    else {
        if (computerChoice === "Rock") {
            console.log("You lose this round! Rock beats scissors.");
            ++computerScore;
        }
        else {
            console.log("You win this round! Scissors beats paper.");
            ++humanScore;
        }
    }
    console.log(`Score: ${humanScore} - ${computerScore}`);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
        
    }
    
    if (humanScore > computerScore) {
        console.log("You won!!!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost :( Better luck next time!");
    }
    else console.log("The game was a tie!");
}

playGame();