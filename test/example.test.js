// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
const test = QUnit.test;
console.log(getRandomThrow);
test('This function should give a number between 1 & 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations  
    alert(`${getRandomThrow}`);
    //Act 
    // Call the function you're testing and set the result to a const
    //Expect
    // Make assertions about what is expected versus the actual result
});
