const calc = require('./calc');
const readline = require('readline');

let userInput = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter at least two numbers to add: ', (response) => {
  userInput += response;

  if(response.length < 2) {
    console.log('We can\'t add a single number. Try again by running the app again.');
    rl.close();
  } else {

    //Change userInput string into array of numbers
    let arrNums = userInput.split('').map( num => parseInt(num))
    // console.log(arrNums)
    let result = calc.sum(arrNums)
    console.log(`The sum of ${arrNums} is ${result}`)
    rl.close();
    process.stdin.destroy;
  }
});
