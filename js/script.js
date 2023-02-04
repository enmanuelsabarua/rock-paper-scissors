const options = ["rock", "paper", "scissors"];
let round = 0;
let computerScore = 0;
let playerScore = 0;
let endGame = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return ["It's a tie!", -1];
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return ["You Lose! paper beats rock", 0];
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ["You Win! rock beats scissors", 1];
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        return ["It's a tie!", -1];
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ["You Lose! scissors beats paper", 0];
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ["You Win! paper beats rock", 1];
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ["It's a tie!", -1];
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ["You Lose! rock beats scissors", 0];
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ["You Win! scissors beats paper", 1];
    } 

    else {
        return "Invalid Value";
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', e => {
        const playScore = document.querySelector('.player');
        const compScore = document.querySelector('.computer');

        if (endGame) {
            endGame = 0;
            playerScore = 0;
            computerScore = 0;
            playScore.textContent = `Player: ${playerScore}`;
            compScore.textContent = `Computer: ${computerScore}`;
            return;
        }
        
        let playerSelection = e.target.textContent;
        const computerSelection = getComputerChoice();

        const compSelection = document.querySelector('.computer-selection');
        compSelection.textContent = ` Computer selection: ${computerSelection}`;
        
        const result = document.querySelector('.result');
        result.textContent = playRound(playerSelection.toLocaleLowerCase(), computerSelection)[0];
        
        // If the player win, he wins a point, if the computer win it wins a point
        if (playRound(playerSelection.toLocaleLowerCase(), computerSelection)[1] === 1) {
            ++playerScore;
            playScore.textContent = `Player: ${playerScore}`;
        } else if (playRound(playerSelection.toLocaleLowerCase(), computerSelection)[1] === 0) {
            ++computerScore;
            compScore.textContent = `Computer: ${computerScore}`;
        }
        
        // Check if the player or the computer won
        if (playerScore === 5 || computerScore === 5) {
            endGame = 1;

            if (playerScore === 5) {
                result.textContent = "You won the game!!";                
                
            } else if (computerScore === 5) {
                result.textContent = "The computer won the game!!";
                
            }
        }

    });
});