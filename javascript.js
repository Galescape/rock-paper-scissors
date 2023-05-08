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

const playerChoice = formatPlayerInput(prompt(" "));
const computerChoice = getComputerChoice();

function singleRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}.`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
}

console.log(singleRound(playerChoice, computerChoice));