let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);
};

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
    if(humanGuess === computerGuess) {return true}
    else if(Math.abs(secretTargetNumber-humanGuess) < Math.abs(secretTargetNumber-computerGuess)) {return true}
    else if(Math.abs(secretTargetNumber-humanGuess) === Math.abs(secretTargetNumber-computerGuess)) {return true}
    else {return false}
};

const updateScore = (x) => {
    if(x === 'human') {humanScore +=1}
    else if (x === 'computer') {computerScore += 1}
    else {return 'Error: invalid entry'}
}

const advanceRound = () => {
    currentRoundNumber += 1
}
