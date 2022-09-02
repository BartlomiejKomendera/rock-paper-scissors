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
    //console.log(computerChoice);

    return computerChoice;
}

function playRound(computerChoice, playerChoice) {
    var computerChoice = computerChoice.toLowerCase();
    var playerChoice = playerChoice.toLowerCase();
    var result;

    if (computerChoice == "rock" && playerChoice == "paper") {
        result = "You win! Paper beats Rock";
    }
    if (computerChoice == "rock" && playerChoice == "scissors") {
        result = "You lose! Rock beats Scissors";
    }
    if (computerChoice == "rock" && playerChoice == "rock") {
        result = "You draw! Rock doesn't beat Rock";
    }
    if (computerChoice == "paper" && playerChoice == "paper") {
        result = "You draw! Paper doesn't beat Paper";
    }
    if (computerChoice == "paper" && playerChoice == "scissors") {
        result = "You win! Scissors beat Paper";
    }
    if (computerChoice == "paper" && playerChoice == "rock") {
        result = "You lose! Paper beats Rock";
    }
    if (computerChoice == "scissors" && playerChoice == "paper") {
        result = "You lose! Scissors beat Paper";
    }
    if (computerChoice == "scissors" && playerChoice == "scissors") {
        result = "You draw! Scissors doesn't beat Scissors";
    }
    if (computerChoice == "scissors" && playerChoice == "rock") {
        result = "You win! Rock beats Scissors";
    }

    return result;

}

function game() {
    var result = "";
    var playerScore = 0;
    var computerScore = 0;
    var i = 0;

    function displayResult(result) {
        const div = document.querySelector(".result");
        div.textContent = result;
    }

    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        i++;
        displayResult(result = playRound(getComputerChoice(), rock.value));
        increaseScore();
    })

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        displayResult(result = playRound(getComputerChoice(), paper.value));
        increaseScore();
    })

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        displayResult(result = playRound(getComputerChoice(), scissors.value));
        increaseScore();
    })

    function increaseScore() {

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
            console.log("Player wins the game");
            displayEndResult("Player wins the game " + playerScore + "-" + computerScore);
        }
        if (computerScore == 3) {
            console.log("Computer wins the game");
            displayEndResult("Computer wins the game " + computerScore + "-" + playerScore);

        }
    }

    function displayEndResult(endResult) {
        const div = document.querySelector(".result");
        div.textContent = endResult;
        div.setAttribute("style", "color: blue");
    }
}

console.log(game());