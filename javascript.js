alert('Play five rounds of Rock, Paper, Scissors against the computer.');

function getComputerChoice () {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const finalChoice = computerChoices[randomNumber];
    return finalChoice;
}

function formatPlayerInput (string) {
    let firstLetterCap = string[0].toUpperCase();
    let restOfString = string.slice(1).toLowerCase();
    return firstLetterCap + restOfString;
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === 'Lava') {
        playerScore++;
        return `You win! ${playerSelection} beats everything!`;
    } else {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
    const playerChoice = formatPlayerInput(prompt('Enter your play:', ''));
    const computerChoice = getComputerChoice();

    console.log(playRound(playerChoice, computerChoice));
    }

    if (playerScore > computerScore) {
        console.log(`You win! Your score: ${playerScore}/5. Computers score: ${computerScore}/5.`);
    } else if (playerScore < computerScore) {
        console.log(`You lose! Your score: ${playerScore}/5. Computers score: ${computerScore}/5.`);
    } else {
        console.log("It's a tie!");
    }
}

game();