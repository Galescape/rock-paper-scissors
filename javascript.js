function getComputerChoice () {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const finalChoice = computerChoices[randomNumber];
    return finalChoice;
}

console.log(getComputerChoice());