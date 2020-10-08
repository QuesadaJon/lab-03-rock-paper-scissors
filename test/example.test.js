// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { numberConverter, didUserWin } from '../get-random-throw.js';
const test = QUnit.test;

test('This function should take a number between 1, 2, and 3 and return rock, paper, or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations  
    const expected1 = 'rock';
    const expected2 = 'paper';
    const expected3 = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = numberConverter(1);
    const actual2 = numberConverter(2);
    const actual3 = numberConverter(3);
      //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);

});

test('We want it to determine wins and losses based on inputs.', (expect) => {
    //Arrange
    // Set up your arguments and expectations  
    const userInput1 = 'rock';
    const userInput2 = 'paper';
    const userInput3 = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = didUserWin(userInput1, userInput1);
    const actual2 = didUserWin(userInput1, userInput2);
    const actual3 = didUserWin(userInput1, userInput3);
    const actual4 = didUserWin(userInput2, userInput1);
    const actual5 = didUserWin(userInput2, userInput2);
    const actual6 = didUserWin(userInput2, userInput3);
    const actual7 = didUserWin(userInput3, userInput1);
    const actual8 = didUserWin(userInput3, userInput2);
    const actual9 = didUserWin(userInput3, userInput3);

    //Expect
    // Make assertions about what is expected versus the actual result
    const expected1 = 'draw';
    const expected2 = 'win';
    const expected3 = 'lose';

    expect.equal(expected1, actual1);
    expect.equal(expected3, actual2);
    expect.equal(expected2, actual3);
    expect.equal(expected2, actual4);
    expect.equal(expected1, actual5);
    expect.equal(expected3, actual6);
    expect.equal(expected3, actual7);
    expect.equal(expected1, actual9);
    expect.equal(expected1, actual8);
});