let prompt = require('prompt-sync')();
// This is the API function to call the 4 random numbers
// This variable api_url is the link to the Random.org api
const api_url = "https://api.random.org/json-rpc/2/invoke";
// This async function call of the api with the parameters needed to generate the 4 require numbers
function randomNumber() {
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
        let data = json.result.random.data;
        console.log(data);
    
    let correct = 0;
    let tries = 0;
    let rightNumberPlace = [];

    console.log("Welcome to the Mastermind Game!");
    console.log("Rules are simple:"); 
    console.log("Chose 4 numbers from 0 to 7.");
    console.log("Try to guess the right number in the right order!");
    console.log("You have 10 tries to figure this out.");
    console.log("Now the game begins!");


    while(correct < 4){
        let guess1 = prompt("First number ");
        let guess2 = prompt("Second number ");
        let guess3 = prompt("Third number ");
        let guess4 = prompt("Fourth number ");
        tries +=1;

    //     // for(let i = 0; i < guess1; i++){
    //     //     if(guess1[i] === response[i]){
    //     //         correct += 1;
    //     //         rightNumberPlace[i] = response[i];
    //     //     }
    //     // }

        if(guess1 == data[0]) {
            correct += 1;
        };
        if(guess2 == data[1]) {
            correct += 1;
        }
        if(guess3 == data[2]) {
            correct += 1;
        }
        if(guess4 == data[3]) {
            correct += 1;
        }

        if (tries >= 3) {
            console.log("You reach the maximum tries, Better luck next time");
            break
        }

        if(correct < 4){
            console.log("You guessed " + correct + " numbers correctly.");
            correct = 0
            continue
        }else {
            if(tries === 1 ){
                console.log(" You did it!, you guess all the numbers correctly! It took you " + tries + " try");
            }
            else{
                console.log(" You did it!, you guess all the numbers correctly! It took you " + tries + " tries");
            }
        } 
    };


    })

    
}

randomNumber();