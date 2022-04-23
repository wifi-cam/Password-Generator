// Functions for generating random number lowercase uppercase letters , symbols
//97 is the when charcodes start for lowercase, upper is 65-96
//Math.random() * [1-X] + [Y], X = Range, Y = Where to start looking within charcode list
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}


/* Math.random method genrate a random floating-point numbers
Math.floor() function returns the largest integer less than or equal to a given number.
For generating a random uppercase lowercase text random numbers symbols we use Charcode 
http://stevehardie.com/2009/09/character-code-list-char-code/ */

// adding a all functions into a object called randomFunc
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};
// adding a click event listner to generate button
generateBtn.addEventListener("click", () => { 
    const length = document.getElementById("PasswordLength").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;
    }
)


// function for generating random password
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = "";
    const typesCount = lower + upper + number + symbol;

// filter out unchecked types
    const typesArr = [{ lower }, { upper }, { number }, { symbol }];
    console.log(typesArr);
}




// creating a loop for calling generator function for each type
// slicing password from 0 to length

// copy to clipboard

// add click event listner on button

// execute command for copy text by selecting textarea text with id
