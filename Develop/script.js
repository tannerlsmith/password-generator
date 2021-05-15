// Assignment code here
var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
];

var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' 
];

var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // references dom

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calls generatePassword (not defined)
  var passwordText = document.querySelector("#password"); //grabs password element
  
  passwordText.value = password; //sets the value of generatePassword (change the value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var charLength = prompt("How long would you like your password? (choose between 8 and 128 characters)")

  var confirm1 = confirm ("Press ok for uppercase letters") 
    if(confirm1) {
      upperCase [Math.floor(Math.random() * upperCase.length - 1)]
    }
    

  var confirm2 = confirm ("Press ok for lowercase letters")
    if(confirm2) {
      lowerCase [Math.floor(Math.random() * lowerCase.length - 1)]
    } 

  var confirm3 = confirm ("Press ok for numbers")
    if(confirm3) {
      lowerCase [Math.floor(Math.random() * numbers - 1)]
    } 
};