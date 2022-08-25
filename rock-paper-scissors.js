function getComputerChoice() {
    var generatedNumber = Math.floor(Math.random() * 3);
    var computerChoice = "";
    switch (generatedNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    console.log(computerChoice);

    return computerChoice;
}

function getPlayerChoice() {
    var playerChoice = window.prompt("Rock, Paper or Scissors?");
    console.log(playerChoice);
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    var computerChoice = computerChoice.toLowerCase();
    var playerChoice = playerChoice.toLowerCase();
    var winner;

    if (computerChoice == "rock" && playerChoice == "paper") {
        winner = "You win! Paper beats Rock";
    }
    if (computerChoice == "rock" && playerChoice == "scissors") {
        winner = "You lose! Scissors beat Rock";
    }
    if (computerChoice == "rock" && playerChoice == "rock") {
        winner = "You draw! Rock doesn't beat Rock";
    }
    if (computerChoice == "paper" && playerChoice == "paper") {
        winner = "You draw! Paper doesn't beat Paper";
    }
    if (computerChoice == "paper" && playerChoice == "scissors") {
        winner = "You win! Scissors beat Paper";
    }
    if (computerChoice == "paper" && playerChoice == "rock") {
        winner = "You lose! Paper beats Rock";
    }
    if (computerChoice == "scissors" && playerChoice == "paper") {
        winner = "You lose! Scissors beat Paper";
    }
    if (computerChoice == "scissors" && playerChoice == "scissors") {
        winner = "You draw! Scissors doesn't beat Scissors";
    }
    if (computerChoice == "scissors" && playerChoice == "rock") {
        winner = "You win! Rock beats Scissors";
    }

    return winner;

}

function game() {
    var winner = "";
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("iteration: " + i);
        var result = playRound(getComputerChoice(), getPlayerChoice());
        if (result.includes("win")) {
            console.log("Player wins");
            playerScore++;
            console.log(playerScore);
        }
        if (result.includes("lose")) {
            console.log("Computer wins");
            computerScore++;
            console.log(computerScore);
        }
        if (result.includes("draw")) {
            i--;
        }
        if (playerScore == 3) {
            winner = "Player";
            break;
        }
        if (computerScore == 3) {
            winner = "Computer";
            break;
        }
    }

    return winner;

}

console.log(game());