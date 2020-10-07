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

    if (playerHand === 'rock' && computerHand === 'paper' || playerHand === 'scissors' && computerHand === 'rock' || playerHand === 'paper' && computerHand === 'scissors') {
        return 'lose';
    }
    if (playerHand === 'rock' && computerHand === 'scissors' || playerHand === 'paper' && computerHand === 'rock' || playerHand === 'scissor' && computerHand === 'paper') {
        return 'win';
    } 
    else {
        return 'draw';}
}