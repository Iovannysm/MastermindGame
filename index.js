let prompt = require('prompt-sync')();

const api_url = "https://api.random.org/json-rpc/2/invoke";
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
    });
    const data = await response.json();
    let randomNum = data.result.random.data;
    
    console.log(randomNum);
}

randomNumber();


