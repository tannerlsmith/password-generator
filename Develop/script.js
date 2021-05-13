// Assignment code here
var promptUpperCase = window.prompt("Would you like an uppercase character?") 

var promptLowerCase = window.prompt("Would you like a lowercase character?")

var promptNumber = window.prompt("Would you like random numbers?")

var randomSymbols = prompt("Would you like symbols?")

// Get references to the #generate element (This will grab an id of generate from the HTML)
var generateBtn = document.querySelector("#generate")



// Write password to the #password input
//calls a function called generatePassword that returns a user's final pass.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//adds event listener for click on the generateBtn and calls writepass function
generateBtn.addEventListener("click", writePassword);












// generator functions 
// assignments 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // selects number from 0-9 starting at 48
}



//1. how long user's pass. is?
//2. lowercase chars?
//3. uppercase chars?
//4. numbers?
//5. symbols?