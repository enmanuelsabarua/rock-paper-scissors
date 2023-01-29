const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! paper beats rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! rock beats scissors";
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! scissors beats paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! paper beats rock";
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! scissors beats paper";
    } 

    else {
        return "Invalid Value";
    }
}

function game() {
    const playerSelection = prompt("Rock Paper Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection.toLocaleLowerCase(), computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}