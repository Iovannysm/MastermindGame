let prompt = require('prompt-sync')();
// This is the API function to call the 4 random numbers
// This variable api_url is the link to the Random.org api
const api_url = "https://api.random.org/json-rpc/2/invoke";
// This async function call of the api with the parameters needed to generate the 4 require numbers
async function randomNumber() {
    const response = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            "jsonrpc": "2.0",
            "method": "generateIntegers",
            "params": {
                "apiKey": "ba38db69-5c29-4029-85a4-4741eb902135",
                "n": 4,
                "min": 0,
                "max": 7,
                "replacement": true
            },
            "id": 42
        })
    })


    // This data variable stores the data returns when called on the API
    const data = await response.json();
    // This randomNum variable reaches into the Json data and return the array with the 4 numbers.
    let randomNum = data.result.random.data;
    console.log(randomNum);
    
}

const listOfNumbers = randomNumber();
console.log(listOfNumbers);

console.log("Welcome to the Mastermind Game!");
console.log("Rules are simple:"); 
console.log("Chose 4 numbers from 0 to 7.");
console.log("Try to guess the right number in the right order!");
console.log("You have 10 tries to figure this out.");
console.log("Now the game begins!");

let correct = 0;
let tries = 0;
while(correct < 4){
    let guess1 = prompt("First number ");
    let guess2 = prompt("Second number ");
    let guess3 = prompt("Third number ");
    let guess4 = prompt("Fourth number ");
    tries +=1;

    if(guess1 == listOfNumbers[0]) {
        correct += 1;
    };
    if(guess2 == listOfNumbers[1]) {
        correct += 1;
    }
    if(guess3 == listOfNumbers[2]) {
        correct += 1;
    }
    if(guess4 == listOfNumbers[3]) {
        correct += 1;
    }

    if (tries >= 10) {
        console.log("You reach the maximum tries, Better luck next time");
        brake
    }

    if(correct < 4){
        console.log("You guessed " + correct + " numbers correctly.");
        correct = 0
        continue
    }else {
        console.log("You did it!, you guess all the numbers correctly! ");
    } 
}


