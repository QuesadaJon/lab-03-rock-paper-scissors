// ### Computer Throw
export function numberConverter(number) {

    if (number === 1) {
        return 'rock';
    } if (number === 2) {
        return 'paper';
    } else { return 'scissors';
    }
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