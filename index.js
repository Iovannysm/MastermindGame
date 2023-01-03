
//This require below allows the game to be played in the terminal
let prompt = require('prompt-sync')();
// This is the API function to call the 4 random numbers
// This variable api_url is the link to the Random.org api
const api_url = "https://api.random.org/json-rpc/2/invoke";
// This async function call of the api with the parameters needed to generate the 4 require numbers
function randomNumber(){
    // This fetch function is use to get the API call going.
    fetch(api_url , {
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
    }).then(response =>{
        return response.json();
    }).then(json => {
        // The nums variable access the random numbers from the API
        let nums = json.result.random.data;
        // console.log(nums);
        // The tries variable tracks how many times you try to guess the numbers
        let tries = 0;
        // The chances variable tracks how many chances you have available before the games ends
        let chances = 10;
        // The rightDigit variable track the right numbers in the wrong location
        let rightDigits = 0;
        // The correct variable tracks the correct number on the correct location
        let correct = 0;
        // The guess array stores the players guesses
        let guess = []

        // This are the rules given to the player
        console.log("Welcome to the Mastermind Game!");
        console.log("Rules are simple:"); 
        console.log("Chose 4 numbers from 0 to 7.");
        console.log("Try to guess the right number in the right order!");
        console.log("You have 10 tries to figure this out.");
        console.log("Numbers can be repeated");
        console.log("Now the game begins!");

        // This while loop runs until the correct variable is equal 4
        while(correct < 4){

            // This are the prompt variables given to the player and stores the answer.
            let guess1 = prompt("Choose the first number  ");
            let guess2 = prompt("Choose the second number  ");
            let guess3 = prompt("Choose the third number  ");
            let guess4 = prompt("Choose the fourth number  ");
            // Tires Increments by 1 each turn
            tries += 1;
            // Chances decreases by one each turn
            chances -= 1;

            // This 4 if statements check to see if the player input is equal to the random numbers
            // If the is not equal to the random number the player input is stored in the guess array
            // The else statement check the opposite and  means that the player input is equal to the random number 
            // it stores the number in the guess array and adds 1 to the correct variable
            if(guess1 != nums[0]) {
                guess.push(guess1);
            }else {
                guess.push(guess1);
                correct += 1; 
            };

            if(guess2 != nums[1]) {
                guess.push(guess2);
            }else {
                guess.push(guess2);
                correct += 1;
            };

            if(guess3 != nums[2]) {
                guess.push(guess3);
            }else {
                guess.push(guess3);
                correct += 1;
            };

            if(guess4 != nums[3]) {
                guess.push(guess4);
            }else {
                guess.push(guess4);
                correct += 1;
            };

            // This 4 if statements check the same thing but for each number in the guess array.
            // This if statements check if the the player input is equal to the random number and adds 1 to the rightDigit variable
            // Except it doesn't check if the guess array index is equal to the same index of nums array because the 4 previous if statements do that already.  
            if(guess[0] == nums[1] || guess[0] == nums[2] || guess[0] == nums[3]){
                rightDigits +=1;  
            };
            if(guess[1] == nums[0] || guess[1] == nums[2] || guess[1] == nums[3]){
                rightDigits +=1;  
            };
            if(guess[2] == nums[0] || guess[2] == nums[1] || guess[2] == nums[3]){
                rightDigits +=1; 
            };
            if(guess[3] == nums[0] || guess[3] == nums[1] || guess[3] == nums[2]){
                rightDigits +=1;  
            };
               
           

            
            // This if statement check to see if the correct variable is less than 4 
            // and it gives logic to the player and informs the stage of the game played. 
            if(correct < 4) {
                if(rightDigits > 0){
                    console.log('Player guesses ' + '" '+ guess + ' "'+ ' games responds ' + '" ' + rightDigits + ' correct numbers and ' + correct + ' correct locations " ');
                    console.log('You have ' + chances + ' chances left!');
                }else if(correct == 0){
                    console.log('Player guesses ' + '" '+ guess + ' "'+ ' games responds ' + ' "all incorrect" ');
                    console.log('You have ' + chances + ' chances left!');
                }else if(correct == 1){
                    console.log('Player guesses ' + '" '+ guess + ' "'+ ' games responds ' + '" ' + correct + ' correct number and ' + correct + ' correct location " ');
                    console.log('You have ' + chances + ' chances left!');
                }else if(correct > 1) {
                    console.log('Player guesses ' + '" '+ guess + ' "'+ ' games responds ' + '" ' + correct + ' correct numbers and ' + correct + ' correct location " ');
                    console.log('You have ' + chances + ' chances left!');
                }
                // This if statement check if the chances variable reaches 0 and terminates the game
                if(chances == 0) {
                    console.log("You ran out of chances, Better luck next time!");
                    break
                };

                // This variable resets the variables and allows the while loop to continue and display the correct information
                correct = 0;
                rightDigits = 0;
                guess = [];
                continue
            };    

            // This if statement checks if the correct variable has reach 4 and ends the game with a win 
            // message depending if the player won in 1 try or multiple tries.
            if(correct == 4) {
                if(tries == 1){
                    console.log("You guess all the numbers!, It took you " + tries + " try.");
                }else {
                    console.log("You guess all the numbers!, It took you " + tries + " tries."); 
                }
            };
        };
    });    
};

// This is the call to the function that makes the game run when called in the terminal.
randomNumber();