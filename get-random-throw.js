// ### Computer Throw
export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) {
        return 'rock';
    }
    if (randomNumber === 2) {
        return 'paper';
    }
    if (randomNumber === 3) {
        return 'scissors';
    }
    return randomNumber;
}

// Goal is to generate a number between 1 & 3 and assign it a rock, paper, scissors value

export function didUserWin(playerHand, computerHand) {
    if (playerHand === 'rock' && computerHand === 'rock') {
        return 'draw';
    }
    if (playerHand === 'rock' && computerHand === 'paper') {
        return 'lose';
    }
    if (playerHand === 'rock' && computerHand === 'scissors') {
        return 'win';
    }
    if (playerHand === 'paper' && computerHand === 'rock') {
        return 'win';
    }
    if (playerHand === 'paper' && computerHand === 'paper') {
        return 'draw';
    }
    if (playerHand === 'paper' && computerHand === 'scissors') {
        return 'lose';
    }
    if (playerHand === 'scissors' && computerHand === 'rock') {
        return 'lose';
    }
    if (playerHand === 'scissor' && computerHand === 'paper') {
        return 'win';
    }
    if (playerHand === 'scissor' && computerHand === 'scissors') {
        return 'draw';
    }

}