function getComputerChoice () {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const finalChoice = computerChoices[randomNumber];
    return finalChoice;
}

console.log(getComputerChoice());

function formatPlayerInput (string) {
    let firstLetterCap = string[0].toUpperCase();
    let restOfString = string.slice(1).toLowerCase();
    return firstLetterCap + restOfString;
}
